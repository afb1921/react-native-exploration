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
    routes: [
      {nav: def_Page.commonLabel, routeName: 'Tables', title: 'Table Examples'},
      {nav: def_Page.commonLabel, routeName: 'Accordion', title: 'Accordion Examples'},
      {nav: def_Page.commonLabel, routeName: 'CheckBox', title: 'Check Box Examples'},
      {nav: def_Page.commonLabel, routeName: 'ComboBox', title: 'Combo Box Examples'},
      {nav: def_Page.commonLabel, routeName: 'Lists', title: 'List Examples'},
      {nav: def_Page.commonLabel, routeName: 'Image', title: 'Image Example'},
      {nav: def_Page.commonLabel, routeName: 'VideoPlayer', title: 'Video Example'},
      {nav: def_Page.commonLabel, routeName: 'Dropdown', title: 'Dropdown Example'},
      {nav: def_Page.commonLabel, routeName: 'ModalSelection', title: 'Modal Selection Example'},
      {nav: def_Page.commonLabel, routeName: 'LinkButton', title: 'External Link Example'},
      {nav: def_Page.commonLabel, routeName: 'RadioButton', title: 'Radio Button Example'},
      {nav: def_Page.commonLabel, routeName: 'TextField', title: 'Text Field Example'},


    ],
  },
  {
    key: 'Accessibility Properties',
    title: 'Accessibility Properties',
    routes: [{nav: def_Page.commonLabel, routeName: 'AccessibilityProperties'}],
  },
];
