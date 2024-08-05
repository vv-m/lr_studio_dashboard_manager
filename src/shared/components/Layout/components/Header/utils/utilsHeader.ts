import SiderbarLeftMenu from 'shared/constants/SiderbarLeftMenu';

const getHeaderTitle = (chapter: string | undefined) => {
  if (!chapter) return 'Сводка';

  const currentDepartment = SiderbarLeftMenu.find((el) => el.path === chapter);

  if (!currentDepartment?.path) return '';

  return currentDepartment.text;
};

export default getHeaderTitle;
