import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useListVacationHttpController from 'shared/http/useListVacationHttpController';
import { setVacation } from 'store/VacationSlice/VacationSlice';

const useListVacation = () => {
  const dispatch = useDispatch();
  const { getListVacation } = useListVacationHttpController();

  useEffect(() => {
    (async () => {
      const data = await getListVacation();
      if (data?.vacation_requests) {
        dispatch(setVacation(data?.vacation_requests));
      } else {
        dispatch(setVacation(null));
      }
    })();
  }, [getListVacation]);
};

export default useListVacation;
