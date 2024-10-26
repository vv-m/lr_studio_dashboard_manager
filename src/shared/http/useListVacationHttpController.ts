import { useCallback } from 'react';
import mockListVacation from 'static/mock/mockListVacation';

interface IInfoVacation {
  employee_id: number;
  employee_name: string;
  type: string;
  request_date: string;
  start_date: string;
  end_date: string;
  days_count: number;
  status: string;
}

interface IResGetListVacation {
  vacation_requests: IInfoVacation[];
}

interface IPostCreateApplicationVacation {
  vacation_type: string;
  start_date: string;
  end_date: string | null;
  comment?: string;
}

const useListVacationHttpController = () => {
  const getListVacation = useCallback((): IResGetListVacation | null => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const id = localStorage.getItem('id');
      // const { data } = await axios.get('/api/v1/available-days', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockListVacation;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  const postCreateApplicationVacation = useCallback(
    (data: IPostCreateApplicationVacation) => {
      try {
        // Пример запроса
        // const token = localStorage.getItem('token');
        // const id = localStorage.getItem('id');
        // const { data } = await axios.post('/api/v1/vacations', data ,{
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        return {
          employee_id: 1,
          employee_name: 'Иван Иванов',
          type: data.vacation_type,
          request_date: '2024-06-29',
          start_date: data.start_date,
          end_date: data.end_date || '',
          days_count: 14,
          status: 'pending',
        };
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    [],
  );

  return { getListVacation, postCreateApplicationVacation };
};

export default useListVacationHttpController;
