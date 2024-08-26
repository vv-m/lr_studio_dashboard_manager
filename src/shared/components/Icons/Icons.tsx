import { FC, memo } from 'react';
import useIcons from './useIcons';

interface IIcons {
  name: string;
  isActive?: boolean;
}

const Icons: FC<IIcons> = memo(({ name, isActive }) => {
  const icons = useIcons({ isActive });
  return icons[name] || null;
});
export default Icons;
