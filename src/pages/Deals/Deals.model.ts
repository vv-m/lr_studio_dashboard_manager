export interface IRenevue {
  month: string;
  year: number;
  revenue: number;
}

export interface IResGetCallsFull {
  periods: IRenevue[];
}

export interface IDeal {
  month: string;
  year: number;
  total_deals: number;
  successful_deals: number;
  conversion: number;
}

export interface IResGetDeals {
  periods: IDeal[];
}

export default IRenevue;
