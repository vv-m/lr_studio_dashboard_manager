type TSvodkaManager = {
  qty_deals: number;
  target_qty_deals: number;
  compaired_parcent_qty_deals: number;
  sum_deals: number;
  target_sum_deals: number;
  compaired_parcent_sum_deals: number;
  bonus: number;
  compaired_parcent_bonus: number;
  salary: number;
  conversion_rate: number;
};

export type TSvodkaDepartment = {
  qty_deals: number;
  target_qty_deals: number;
  compared_percent_qty_deals: number;
  sum_deals: number;
  target_sum_deals: number;
  compared_percent_sum_deals: number;
  bonus_level: number;
  bonus_level_total: number;
  remainder_for_next_level: number;
  total_for_next_level: number;
  current_percent_bonus_level: number;
  next_percent_bonus_level: number;
};

export type TSvodkaDeals = {
  rows: {
    id: string;
    counterparty_name: string;
    sum: number;
    no_payed_sum: number;
    no_shipped_sum: number;
  }[];
  total_sum: number;
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
};

export default TSvodkaManager;
