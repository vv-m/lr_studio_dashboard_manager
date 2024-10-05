import { useCallback } from 'react';
import renevueThreeMonths, {
  dealNineMonths,
  dealSixMonths,
  dealThreeMonths,
  renevueNineMonths,
  renevueSixMonths,
} from 'static/mock/mockDeals';

interface IGetDeals {
  period: '3' | '6' | '9';
}

const useDealsHttpController = () => {
  const getRenevue = useCallback(async ({ period }: IGetDeals) => {
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

  const getDeals = useCallback(async ({ period }: IGetDeals) => {
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

  return { getRenevue, getDeals };
};

export default useDealsHttpController;
