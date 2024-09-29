import { useEffect, useState } from 'react';
import useCallsHttpController from 'shared/http/useCallsHttpController';

const useCalls = () => {
  const { getCallsFull } = useCallsHttpController();

  const [filterGraphCalls, setFilterGraphCalls] = useState<'3' | '6' | '9'>('3');

  const [dataCalls, setDataCalls] = useState<IDataCalls | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getCallsFull({ period: filterGraphCalls });
      if (!data) return;
      setDataCalls(data);
    })();
  }, [getCallsFull, filterGraphCalls]);

  return { filterGraphCalls, setFilterGraphCalls, dataCalls };
};

export default useCalls;
