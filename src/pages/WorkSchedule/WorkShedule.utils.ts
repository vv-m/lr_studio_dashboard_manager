import {
  IResGetInfoVacation,
  IVacation,
} from 'shared/http/useInfoVacationHttpController';

// INFO: функция возвращает ближайщий отпуск и ближайщий использованный
function findVacationRequests(vacationData: IResGetInfoVacation) {
  let latestUsedVacation: IVacation | null = null;
  let nearestApprovedVacation: IVacation | null = null;

  vacationData.vacation_requests.forEach((request) => {
    if (request.status === 'used') {
      if (
        !latestUsedVacation ||
        new Date(request.request_date) > new Date(latestUsedVacation.request_date)
      ) {
        latestUsedVacation = request;
      }
    } else if (request.status === 'approved') {
      if (
        !nearestApprovedVacation ||
        new Date(request.request_date) > new Date(nearestApprovedVacation.request_date)
      ) {
        nearestApprovedVacation = request;
      }
    }
  });

  return {
    latestUsedVacation,
    nearestApprovedVacation,
  };
}

export default findVacationRequests;
