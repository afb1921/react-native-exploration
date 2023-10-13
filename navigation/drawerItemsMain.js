import { def_Page } from '../constant';

export const drawerItemsMain = [ 
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: def_Page.commonLabel, routeName: 'Home'}],
  },
  {
    key: 'Example Components',
    title: 'Example Components',
    routes: [{nav: def_Page.commonLabel, routeName: 'ExampleComponents'}],
  },
  {
    key: 'Settings',
    title: 'Settings',
    routes: [
      {nav: def_Page.commonLabel, routeName: 'Subitem1Component', title: 'Subitem1Component'},
      {nav: def_Page.commonLabel, routeName: 'Settings2', title: 'Settings 2'},
    ],
  },
];
