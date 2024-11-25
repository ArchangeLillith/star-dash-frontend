export const defaultLinks = [{ href: '/help', text: 'Help' }];

// Helper function to generate nav links for users without registered events
export const getNoEventLinks = () => [
  ...defaultLinks,
  { href: '/join-run', text: 'Join a Run' },
  { href: '/create-run', text: 'Create new run' },
];

// Helper function to generate nav links for users with multiple events
export const getMultiEventLinks = () => [
  { href: '/schedule', text: 'Schedule' },
  { href: '/data', text: 'Fillers and Managers' },
  { href: '/join-run', text: 'Join a Run' },
  { href: '/event', text: 'Choose an Event' },
  ...defaultLinks,
];

// Helper function to add admin links if the user is an admin
export const getAdminLinks = () => [
  {
    href: '/SiteAdmin',
    text: 'Site Settings',
    className: 'admin-nav',
  },
];
