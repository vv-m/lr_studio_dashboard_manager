import axios from 'axios';
import { useCallback } from 'react';
import mockSvodka, {
  mockDealsNotPaid,
  mockDealsNotShipped,
  mockSvodkaDepartment,
} from 'static/mock/mockSvodka';

interface IGetLoadDeals {
  filter: 'all' | 'not_shipped' | 'not_paid';
  idManager: number;
  page?: number;
  perPage?: number;
}

const useSvodkaHttpController = () => {
  const getLoadDataManager = useCallback(async () => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/manager', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockSvodka;
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
      return mockSvodkaDepartment;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getLoadDeals = useCallback(async ({ filter, idManager }: IGetLoadDeals) => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/sale_department', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      if (filter === 'not_paid') {
        return mockDealsNotPaid;
      }
      if (filter === 'not_shipped') {
        return mockDealsNotShipped;
      } else {
        return {
          rows: [...mockDealsNotShipped.rows, ...mockDealsNotPaid.rows],
          total_sum: mockDealsNotPaid.total_sum + mockDealsNotShipped.total_sum,
          total: 100,
          page: 1,
          per_page: 10,
          total_pages: 10,
        };
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getLoadDataManager, getLoadDataDepartment, getLoadDeals };
};

export default useSvodkaHttpController;
