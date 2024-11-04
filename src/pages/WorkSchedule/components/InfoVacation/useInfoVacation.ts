import findVacationRequests from 'pages/WorkSchedule/WorkShedule.utils';
import { useEffect, useState } from 'react';
import useInfoVacationHttpController, {
  IVacation,
} from 'shared/http/useInfoVacationHttpController';

const useInfoVacation = () => {
  const [latestUsedVacation, setLatestUsedVacation] = useState<null | IVacation>(null);
  const [nearestApprovedVacation, setNearestApprovedVacation] =
    useState<null | IVacation>(null);

  const [availableDays, setAvailableDays] = useState<{
    employee_id: number;
    available_days: number;
  } | null>(null);

  const { getInfoVacation, getAvailableDays } = useInfoVacationHttpController();
  useEffect(() => {
    (async () => {
      const dataInfoVacation = await getInfoVacation();
      if (!dataInfoVacation) return;
      const { latestUsedVacation, nearestApprovedVacation } =
        findVacationRequests(dataInfoVacation);
      setLatestUsedVacation(latestUsedVacation);
      setNearestApprovedVacation(nearestApprovedVacation);
      const availableDays = getAvailableDays();
      if (availableDays) {
        setAvailableDays(availableDays);
      }
    })();
  }, []);

  return { nearestApprovedVacation, latestUsedVacation, availableDays };
};

export default useInfoVacation;
