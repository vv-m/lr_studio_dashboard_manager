export interface IInfoVacation {
  employee_id: number;
  employee_name: string;
  type: string;
  request_date: string;
  start_date: string;
  end_date: string;
  days_count: number;
  status: string;
}

interface VacationSliceType {
  vacation: IInfoVacation[] | null;
}

export default VacationSliceType;
