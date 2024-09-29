import axios from 'axios';
import { useCallback } from 'react';

const useExchangeRateHttpController = () => {
  const getLoadExchangeRate = useCallback(async () => {
    const url = 'https://www.cbr-xml-daily.ru/daily_utf8.xml';
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { getLoadExchangeRate };
};

export default useExchangeRateHttpController;
