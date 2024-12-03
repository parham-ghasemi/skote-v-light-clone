export const menus = [
  {
    label: 'MENU',
    content: [
      {
        icon: '/icons/home.svg',
        label: 'Dashboards',
        children: [
          {
            label: 'default',
            to: '/'
          },
          {
            label: 'Sass',
            to: '/sass'
          },
          {
            label: 'Crypto',
            to: '/crypto'
          },
          {
            label: 'Blog',
            to: '/blog'
          },
          {
            label: 'Job',
            to: '/job'
          },
        ]
      },
    ]
  },
  {
    label: 'APPS',
    content: [
      {
        icon: '/icons/calendar.svg',
        label: 'Calendar'
      },
      {
        icon: '/icons/chat.svg',
        label: 'Chat'
      },
      {
        icon: '/icons/file.svg',
        label: 'File Manager'
      },
    ]
  }
];

export default menus;
