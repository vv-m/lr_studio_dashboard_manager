interface IFormData {
  length: string;
  width: string;
  height: string;
  weight: string;
  price: string;
  currency: string;
}

export const OPTIONS = ['USD $', 'RMB ¥'];

export const defaultFormData = {
  length: '',
  width: '',
  height: '',
  weight: '',
  price: '',
  currency: OPTIONS[0],
};

export default IFormData;
