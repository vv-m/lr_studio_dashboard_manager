import { useCallback } from 'react';
import renevueThreeMonths, {
  dealNineMonths,
  dealSixMonths,
  dealThreeMonths,
  renevueNineMonths,
  renevueSixMonths,
} from 'static/mock/mockDeals';
import all1, {
  all2,
  all3,
  not_paid1,
  not_paid2,
  not_paid3,
  not_shipped1,
  not_shipped2,
  not_shipped3,
} from 'static/mock/mockTableDeal';

interface IGetShared {
  period: '3' | '6' | '9';
}

interface IGetDealsTable {
  id_manager?: number;
  page: number;
  filter: 'all' | 'not_shipped' | 'not_paid';
}

const useDealsHttpController = () => {
  const getRenevue = useCallback(async ({ period }: IGetShared) => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/revenue' {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      if (period === '3') {
        return renevueThreeMonths;
      }
      if (period === '6') {
        return renevueSixMonths;
      }

      if (period === '9') {
        return renevueNineMonths;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getDeals = useCallback(async ({ period }: IGetShared) => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/deals' {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      if (period === '3') {
        return dealThreeMonths;
      }
      if (period === '6') {
        return dealSixMonths;
      }

      if (period === '9') {
        return dealNineMonths;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getDealsTable = useCallback(
    async ({ id_manager, page, filter }: IGetDealsTable) => {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/deals', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      if (page === 1 && filter === 'all') {
        return all1;
      }
      if (page === 2 && filter === 'all') {
        return all2;
      }
      if (page === 3 && filter === 'all') {
        return all3;
      }
      if (page === 1 && filter === 'not_shipped') {
        return not_shipped1;
      }
      if (page === 2 && filter === 'not_shipped') {
        return not_shipped2;
      }
      if (page === 3 && filter === 'not_shipped') {
        return not_shipped3;
      }
      if (page === 1 && filter === 'not_paid') {
        return not_paid1;
      }
      if (page === 2 && filter === 'not_paid') {
        return not_paid2;
      }
      if (page === 3 && filter === 'not_paid') {
        return not_paid3;
      }
    },
    [],
  );

  return { getRenevue, getDeals, getDealsTable };
};

export default useDealsHttpController;
