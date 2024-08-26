interface TabInfo {
  route: string;
  title: string;
}

interface ISharedTabs {
  [key: string]: TabInfo;
}

export default ISharedTabs;
