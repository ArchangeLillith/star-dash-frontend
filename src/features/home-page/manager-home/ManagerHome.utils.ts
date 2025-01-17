export type TileType = {
  title: string;
  body: string;
  href: string;
  className: string;
};

export const getAllTiles = (): TileType[] => [
  ...defaultTiles,
  {
    title: 'Schedule',
    body: 'See your schedule and fillers',
    href: '/schedule',
    className: 'marathon text-black',
  },
  {
    title: 'Filler Data',
    body: 'View and edit all your fillers data',
    href: '/data',
    className: 'filler-data text-black',
  },
];

export const getDefaultTiles = (): TileType[] => [...defaultTiles];

const defaultTiles = [
  {
    title: 'Change Event',
    body: 'Select a different event to work on',
    href: '/change-event',
    className: 'marathon text-black',
  },
  {
    title: 'About',
    body: 'Learn about the site',
    href: '/about',
    className: 'about text-black',
  },
  {
    title: 'Helpppp',
    body: "FAQ's and help for using the site",
    href: '/help',
    className: 'help text-black',
  },
];
