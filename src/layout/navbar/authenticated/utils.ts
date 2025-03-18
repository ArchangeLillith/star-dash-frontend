export const defaultLinks = [
  { href: '/join-run', text: 'Join Existing Run' },
  { href: '/create-run', text: 'Create New run' },
  { href: '/settings', text: 'Settings' },
  { href: '/help', text: 'Help' },
];

// Helper function to generate nav links for users with multiple events
export const getMultiEventLinks = () => [
  { href: '/change-event', text: 'Pick an Event' },
  { href: '/schedule', text: 'Schedule' },
  { href: '/data', text: 'Fillers and Managers' },
  { href: '/event', text: 'Choose an Event' },
  ...defaultLinks,
];
