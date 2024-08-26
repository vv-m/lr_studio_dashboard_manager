import { useEffect, useState } from 'react';
import useSvodkaHttpController from 'shared/http/SvodkaHttpController';
import TSvodkaManager, {
  ICalls,
  IDialogues,
  TSvodkaDeals,
  TSvodkaDepartment,
} from '../Svodka.model';

const useSvodka = () => {
  const [dataManager, setDataManager] = useState<TSvodkaManager | null>(null);
  const [dataDepartment, setDataDepartment] = useState<TSvodkaDepartment | null>(null);
  const [dataDeals, setDataDeals] = useState<TSvodkaDeals | null>(null);
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
  } = useSvodkaHttpController();

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

export default useSvodka;
