import SiderbarLeftMenu, {
  SiderbarLeftServises,
} from 'shared/constants/SiderbarLeftMenu';

const getHeaderTitle = (chapter: string | undefined) => {
  if (!chapter) return 'Сводка';

  const currentDepartment = SiderbarLeftMenu.find((el) => el.path === chapter);

  const currentServises = SiderbarLeftServises.find((el) => el.path === chapter);

  console.log(currentDepartment);

  if (currentDepartment) {
    return currentDepartment.text;
  }

  if (currentServises) {
    return currentServises.text;
  }

  return '';
};

export default getHeaderTitle;
