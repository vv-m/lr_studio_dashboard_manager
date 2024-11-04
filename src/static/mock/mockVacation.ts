const mockGetInfoVacation = {
  vacation_requests: [
    {
      employee_id: 1,
      employee_name: 'Иван Иванов',
      type: 'paid',
      request_date: '2024-06-30',
      start_date: '2024-07-01',
      end_date: '2024-07-14',
      days_count: 14,
      status: 'approved',
    },
    {
      employee_id: 1,
      employee_name: 'Иван Иванов',
      type: 'unpaid',
      request_date: '2024-06-29',
      start_date: '2024-07-01',
      end_date: '2024-07-14',
      days_count: 14,
      status: 'pending',
    },
    {
      employee_id: 1,
      employee_name: 'Иван Иванов',
      type: 'paid',
      request_date: '2024-06-28',
      start_date: '2024-07-01',
      end_date: '2024-07-14',
      days_count: 14,
      status: 'rejected',
    },
    {
      employee_id: 1,
      employee_name: 'Иван Иванов',
      type: 'unpaid',
      request_date: '2024-06-29',
      start_date: '2023-01-01',
      end_date: '2023-01-20',
      days_count: 20,
      status: 'used',
    },
  ],
};

export default mockGetInfoVacation;
