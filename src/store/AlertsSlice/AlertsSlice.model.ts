export type AlertVariants = 'success' | 'danger';

export type TPageAlert = {
  id: number;
  text: string;
  variant: AlertVariants;
};

interface alertsSliceTypes {
  pageAlerts: TPageAlert[];
}

export default alertsSliceTypes;
