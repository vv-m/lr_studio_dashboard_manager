import { useEffect, useState } from 'react';
import useStatisticsHttpController from 'shared/http/useStatisticsHttpControllerHttpController';
import TStatisticsManager, {
  ICalls,
  IDialogues,
  TStatisticsDeals,
  TStatisticsDepartment,
} from '../Statistics.model';

const useStatistics = () => {
  const [dataManager, setDataManager] = useState<TStatisticsManager | null>(null);
  const [dataDepartment, setDataDepartment] = useState<TStatisticsDepartment | null>(
    null,
  );
  const [dataDeals, setDataDeals] = useState<TStatisticsDeals | null>(null);
  const [dataDialogues, setDataDialogues] = useState<IDialogues | null>(null);
  const [dataCalls, setDataCalls] = useState<ICalls | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [typeFilter, setTypeFilter] = useState<'all' | 'not_shipped' | 'not_paid'>('all');

  const {
    getLoadDataManager,
    getLoadDataDepartment,
    getLoadDeals,
    getLoadDataDialogues,
    getLoadDataCalls,
  } = useStatisticsHttpController();

  const id = localStorage.getItem('idUser') || 151;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const dataManager = await getLoadDataManager();
      const dataDepartment = await getLoadDataDepartment();
      const dataDeals = await getLoadDeals({ idManager: +id, filter: typeFilter });
      const dataDialogues = await getLoadDataDialogues({ idManager: +id });
      const dataCalls = await getLoadDataCalls({ idManager: +id });
      if (dataCalls) setDataCalls(dataCalls);
      if (dataDialogues) setDataDialogues(dataDialogues);
      if (dataManager) setDataManager(dataManager);
      if (dataDepartment) setDataDepartment(dataDepartment);
      if (dataDeals) setDataDeals(dataDeals);
      setIsLoading(false);
    })();
  }, [getLoadDataDepartment, getLoadDataManager]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const dataDeals = await getLoadDeals({ idManager: +id, filter: typeFilter });
      if (dataDeals) {
        setDataDeals(dataDeals);
      }
      setIsLoading(false);
    })();
  }, [getLoadDeals, typeFilter]);

  return {
    dataManager,
    isLoading,
    dataDepartment,
    dataDeals,
    setTypeFilter,
    typeFilter,
    dataDialogues,
    dataCalls,
  };
};

export default useStatistics;
