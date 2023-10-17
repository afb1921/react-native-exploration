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
      {nav: def_Page.commonLabel, routeName: 'Tables', title: 'Tables'},
      {nav: def_Page.commonLabel, routeName: 'Accordion', title: 'Accordion'},
      {nav: def_Page.commonLabel, routeName: 'CheckBox', title: 'Check Box'},
      {nav: def_Page.commonLabel, routeName: 'ComboBox', title: 'Combo Box'},
      {nav: def_Page.commonLabel, routeName: 'Lists', title: 'Lists'},
      {nav: def_Page.commonLabel, routeName: 'Image', title: 'Image'},
      {nav: def_Page.commonLabel, routeName: 'VideoPlayer', title: 'Video'},
      {nav: def_Page.commonLabel, routeName: 'Dropdown', title: 'Dropdown'},
      {nav: def_Page.commonLabel, routeName: 'ModalSelection', title: 'Modal Selection'},
      {nav: def_Page.commonLabel, routeName: 'LinkButton', title: 'External Link'},
      {nav: def_Page.commonLabel, routeName: 'RadioButton', title: 'Radio Button'},
      {nav: def_Page.commonLabel, routeName: 'TextField', title: 'Text Field'},

    ],
  },
  {
    key: 'Accessibility Properties',
    title: 'Accessibility Properties',
    routes: [
      {nav: def_Page.commonLabel, routeName: 'Accessible', title: 'Accessible'},
      {nav: def_Page.commonLabel, routeName: 'Label', title: 'Accessibility Label'},
      {nav: def_Page.commonLabel, routeName: 'Hint', title: 'Accessibility Hint'},
      {nav: def_Page.commonLabel, routeName: 'Role', title: 'Accessibility Role'},
      {nav: def_Page.commonLabel, routeName: 'LabelledBy', title: 'Accessibility Labelled By'},
      {nav: def_Page.commonLabel, routeName: 'LiveRegion', title: 'Accessibility Live Region'},
      {nav: def_Page.commonLabel, routeName: 'ElementsHidden', title: 'Accessibility Elements Hidden'},
      {nav: def_Page.commonLabel, routeName: 'Language', title: 'Accessibility Language'},
      {nav: def_Page.commonLabel, routeName: 'ViewIsModal', title: 'Accessibility View Is Modal'},

    ],
  },
];
