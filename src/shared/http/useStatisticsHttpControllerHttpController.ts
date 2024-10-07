import axios from 'axios';
import { useCallback } from 'react';
import mockStatistics, {
  mockCalls,
  mockDealsNotPaid,
  mockDealsNotShipped,
  mockDialogues,
  mockStatisticsDepartment,
} from 'static/mock/mockSvodka';

interface IGetLoadDeals {
  filter: 'all' | 'not_shipped' | 'not_paid';
  idManager: number;
  page?: number;
  perPage?: number;
}

const useStatisticsHttpController = () => {
  const getLoadDataManager = useCallback(async () => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/manager', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockStatistics;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getLoadDataDepartment = useCallback(async () => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/sale_department', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockStatisticsDepartment;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getLoadDeals = useCallback(async ({ filter, idManager }: IGetLoadDeals) => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/deals', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      if (filter === 'not_paid') {
        return mockDealsNotPaid;
      }
      if (filter === 'not_shipped') {
        return mockDealsNotShipped;
      }
      if (filter === 'all') {
        return {
          rows: [...mockDealsNotShipped.rows, ...mockDealsNotPaid.rows],
          total_sum: mockDealsNotPaid.total_sum + mockDealsNotShipped.total_sum,
          total: 30,
          page: 1,
          per_page: 10,
          total_pages: 30,
        };
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getLoadDataDialogues = useCallback(
    async ({ idManager }: { idManager: number }) => {
      try {
        // Пример запроса
        // const token = localStorage.getItem('token');
        // const { data } = await axios.get('/api/v1/statistic/messeges', {
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        return mockDialogues;
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );

  const getLoadDataCalls = useCallback(async ({ idManager }: { idManager: number }) => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/calls_short', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockCalls;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    getLoadDataManager,
    getLoadDataDepartment,
    getLoadDeals,
    getLoadDataDialogues,
    getLoadDataCalls,
  };
};

export default useStatisticsHttpController;
