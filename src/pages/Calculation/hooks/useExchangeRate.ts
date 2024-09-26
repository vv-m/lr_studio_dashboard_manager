import { useEffect, useState } from 'react';
import useExchangeRateHttpController from 'shared/http/useExchangeRateHttpController';

interface IValueCurrency {
  USD: string;
  RMD: string;
}

const useExchangeRate = () => {
  const [valueCurrency, setValueCurrency] = useState<IValueCurrency>({
    USD: '',
    RMD: '',
  });

  const { getLoadExchangeRate } = useExchangeRateHttpController();

  useEffect(() => {
    const parseXML = (xml: string) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, 'text/xml');

      const usdElement = xmlDoc.querySelector('Valute[ID="R01235"]');
      const cnyElement = xmlDoc.querySelector('Valute[ID="R01375"]');

      const usdValue = usdElement?.querySelector('Value')?.textContent || '';
      const cnyValue = cnyElement?.querySelector('Value')?.textContent || '';

      setValueCurrency({
        USD: usdValue.replace(',', '.'),
        RMD: cnyValue.replace(',', '.'),
      });
    };

    (async () => {
      const data = await getLoadExchangeRate();
      parseXML(data);
    })();
  }, [getLoadExchangeRate]);
  return { valueCurrency };
};

export default useExchangeRate;
