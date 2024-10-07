import { useEffect, useState } from 'react';
import useCallsHttpController from 'shared/http/useCallsHttpController';
import useDealsHttpController from 'shared/http/useDealsHttpController';
import IRenevue, { IDeal } from './Deals.model';
import TStatisticsManager, { IRowsDeal } from 'pages/Statistics/Statistics.model';
import useStatisticsHttpController from 'shared/http/useStatisticsHttpControllerHttpController';

const useDeals = () => {
  const { getCallsFull } = useCallsHttpController();

  const { getRenevue, getDeals, getDealsTable } = useDealsHttpController();

  const { getLoadDataManager } = useStatisticsHttpController();

  const [dataManager, setDataManager] = useState<TStatisticsManager | null>(null);

  const [filterGraphsCalls, setFilterGraphsCalls] = useState<'3' | '6' | '9'>('3');

  const [dataDeals, setDataDeals] = useState<IDeal[] | null>(null);

  const [dataRevenue, setDataRevenue] = useState<IRenevue[] | null>(null);

  const [listDeal, setListDeals] = useState<IRowsDeal[] | null>(null);

  const [totalPage, setTotalPage] = useState<number>(1);

  const [numberPage, setNumberPage] = useState<number>(1);

  const [typeFilter, setTypeFilter] = useState<'all' | 'not_shipped' | 'not_paid'>('all');

  const [allTotalDeals, setAllTotalDeals] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const data = await getDeals({ period: filterGraphsCalls });
      const dataManager = await getLoadDataManager();
      if (dataManager) setDataManager(dataManager);
      if (data) setDataDeals(data.periods);
      const resRenevue = await getRenevue({ period: filterGraphsCalls });
      if (resRenevue) setDataRevenue(resRenevue?.periods);
    })();
  }, [getCallsFull, filterGraphsCalls]);

  useEffect(() => {
    setNumberPage(1);
  }, [typeFilter]);


  useEffect(() => {
    (async () => {
      const data = await getDealsTable({ page: numberPage, filter: typeFilter });
      if (data && numberPage === 1) {
        setListDeals(data.rows);
        setTotalPage(data.total_pages);
        setAllTotalDeals(data.total);
      } else {
        setListDeals((prev) => [...(prev || []), ...(data?.rows || [])]);
      }
    })();
  }, [numberPage, typeFilter]);

  return {
    filterGraphsCalls,
    setFilterGraphsCalls,
    dataDeals,
    dataRevenue,
    dataManager,
    typeFilter,
    setTypeFilter,
    listDeal,
    setNumberPage,
    numberPage,
    totalPage,
    allTotalDeals,
  };
};

export default useDeals;
