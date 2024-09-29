import axios from 'axios';
import { useCallback } from 'react';
import threeMonths, { nineMonths, sixMonths } from 'static/mock/mockCalls';

interface IGetCallsFull {
  period: '3' | '6' | '9';
}

const useCallsHttpController = () => {
  const getCallsFull = useCallback(async ({ period }: IGetCallsFull) => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('/api/v1/statistic/calls_full' {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      if (period === '3') {
        return threeMonths;
      }
      if (period === '6') {
        return sixMonths;
      }

      if (period === '9') {
        return nineMonths;
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getCallsFull };
};

export default useCallsHttpController;
