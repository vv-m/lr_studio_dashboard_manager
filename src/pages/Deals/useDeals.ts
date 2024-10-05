import { useEffect, useState } from 'react';
import useCallsHttpController from 'shared/http/useCallsHttpController';
import useDealsHttpController from 'shared/http/useDealsHttpController';
import IRenevue, { IDeal } from './Deals.model';

const useDeals = () => {
  const { getCallsFull } = useCallsHttpController();

  const { getRenevue, getDeals } = useDealsHttpController();

  const [filterGraphsCalls, setFilterGraphsCalls] = useState<'3' | '6' | '9'>('3');

  const [dataDeals, setDataDeals] = useState<IDeal[] | null>(null);

  const [dataRevenue, setDataRevenue] = useState<IRenevue[] | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getDeals({ period: filterGraphsCalls });
      if (data) setDataDeals(data.periods);
      const resRenevue = await getRenevue({ period: filterGraphsCalls });
      if (resRenevue) setDataRevenue(resRenevue?.periods);
    })();
  }, [getCallsFull, filterGraphsCalls]);

  return { filterGraphsCalls, setFilterGraphsCalls, dataDeals, dataRevenue };
};

export default useDeals;
