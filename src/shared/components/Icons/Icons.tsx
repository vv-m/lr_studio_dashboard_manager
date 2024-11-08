import { FC, memo } from 'react';
import useIcons from './useIcons';

interface IIcons {
  name: string;
  isActive?: boolean;
  color?: string;
}

const Icons: FC<IIcons> = memo(({ name, isActive, color }) => {
  const icons = useIcons({ isActive, color });
  return icons[name] || null;
});
export default Icons;
