import { useCallback } from 'react';
import mockSchedule from 'static/mock/mockShedule';
import mockGetInfoVacation from 'static/mock/mockVacation';

export interface IVacation {
  days_count: number;
  employee_id: number;
  employee_name: string;
  end_date: string;
  request_date: string;
  start_date: string;
  status: string;
  type: string;
}

export interface IResGetInfoVacation {
  vacation_requests: IVacation[];
}

export interface IScheduleManager {
  name: string;
  schedule: {
    date: string;
    status: string;
    day_name: string;
  }[];
}

export interface IGetEmployees {
  employees: IScheduleManager[];
}

const useInfoVacationHttpController = () => {
  const getInfoVacation = useCallback((): IResGetInfoVacation | null => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const id = localStorage.getItem('id');
      // const { data } = await axios.get('/api/v1/vacations?employee_id=${id}', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockGetInfoVacation;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  const getAvailableDays = useCallback((): {
    employee_id: number;
    available_days: number;
  } | null => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const id = localStorage.getItem('id');
      // const { data } = await axios.get('/api/v1/available-days', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return {
        employee_id: 1,
        available_days: 19,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  const getEmployees = useCallback((): IGetEmployees | null => {
    try {
      // Пример запроса
      // const token = localStorage.getItem('token');
      // const id = localStorage.getItem('id');
      // const { data } = await axios.get('/api/v1/shendule/employees?date', {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      return mockSchedule;
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

  return { getInfoVacation, getAvailableDays, getEmployees };
};

export default useInfoVacationHttpController;
