import { def_App } from '../constant';

export const drawerItemsMain = [ 
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: def_App.commonLabel, routeName: 'Home'}],
  },
  {
    key: 'ScreenReaderCheck',
    title: 'Screen Reader Check',
    routes: [{nav: def_App.commonLabel, routeName: 'ScreenReaderCheck'}],
  },
  {
    key: 'Example Components',
    title: 'Example Components',
    routes: [
      {nav: def_App.commonLabel, routeName: 'Tables', title: 'Tables'},
      {nav: def_App.commonLabel, routeName: 'Accordion', title: 'Accordion'},
      {nav: def_App.commonLabel, routeName: 'CheckBox', title: 'Check Box'},
      {nav: def_App.commonLabel, routeName: 'ComboBox', title: 'Combo Box'},
      {nav: def_App.commonLabel, routeName: 'Lists', title: 'Lists'},
      {nav: def_App.commonLabel, routeName: 'Image', title: 'Image'},
      {nav: def_App.commonLabel, routeName: 'VideoPlayer', title: 'Video'},
      {nav: def_App.commonLabel, routeName: 'Dropdown', title: 'Dropdown'},
      {nav: def_App.commonLabel, routeName: 'ModalSelection', title: 'Modal Selection'},
      {nav: def_App.commonLabel, routeName: 'LinkButton', title: 'External Link'},
      {nav: def_App.commonLabel, routeName: 'RadioButton', title: 'Radio Button'},
      {nav: def_App.commonLabel, routeName: 'TextField', title: 'Text Field'},

    ],
  },
  {
    key: 'Accessibility Properties',
    title: 'Accessibility Properties',
    routes: [
      {nav: def_App.commonLabel, routeName: 'Accessible', title: 'Accessible'},
      {nav: def_App.commonLabel, routeName: 'Label', title: 'Accessibility Label'},
      {nav: def_App.commonLabel, routeName: 'Hint', title: 'Accessibility Hint'},
      {nav: def_App.commonLabel, routeName: 'Role', title: 'Accessibility Role'},
      {nav: def_App.commonLabel, routeName: 'LabelledBy', title: 'Accessibility Labelled By'},
      {nav: def_App.commonLabel, routeName: 'LiveRegion', title: 'Accessibility Live Region'},
      {nav: def_App.commonLabel, routeName: 'ImportantForAccessibility', title: 'Important For Accessibility'},
      {nav: def_App.commonLabel, routeName: 'ElementsHidden', title: 'Accessibility Elements Hidden'},
      {nav: def_App.commonLabel, routeName: 'Language', title: 'Accessibility Language'},
      {nav: def_App.commonLabel, routeName: 'ViewIsModal', title: 'Accessibility View Is Modal'},

    ],
  },
];
