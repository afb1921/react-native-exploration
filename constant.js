import React from 'react';
import { Text } from 'react-native';

export const heading = {

  // Heading Styles
  Heading1: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'red', // Default text color
    };

    return (
      <Text
        {...restProps}
        ref={ref}
        style={[defaultStyles, style]} // Merge defaultStyles with the provided style prop
        accessibilityRole='header'
      >
        {children}
      </Text>
    );
  }),

  Heading2: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'red', // Default text color
    };

    return (
      <Text
        {...restProps}
        ref={ref}
        style={[defaultStyles, style]} // Merge defaultStyles with the provided style prop
        accessibilityRole='header'
      >
        {children}
      </Text>
    );
  }),

  Heading3: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'red', // Default text color
    };

    return (
      <Text
        {...restProps}
        ref={ref}
        style={[defaultStyles, style]} // Merge defaultStyles with the provided style prop
        accessibilityRole='header'
      >
        {children}
      </Text>
    );
  }),
};

export const colors = {
  //App Colors//-----------------------

  primaryBlue: "#1DA1F2", //Twitter Blue
  brightBlue: "#039fff",

  lightBlack: "#121212",
  darkerGrey: "#181818",
  darkGrey: "#282828",
  mediumGrey: "#404040",
  lightGrey: "#B3B3B3",
  lighterGrey: '#ebeded', //custom light grey color

}

export const def_Page = {

  //------------------------------------------------
  // if setCommonLabel is true commonLabel will replace the pageName Label to be displayed
  // if setCommonLabel is false pageName will be displayed on the header menu

  setCommonLabel: true, // OPTIONS 'true' or 'false'

  commonLabel: "Accessibility Demo",

  //SWITCHES APP COLORS BETWEEN "lightMode" AND "darkMode"
  setDarkMode: true, // OPTIONS 'true' or 'false'
  //------------------------------------------------------

  //------------------------------------------------

  drawerTitle: "Menu", // drawerTitle sets the title of the drawer when opened

  page1Name: "Home",  // pageName sets the name of the page when displayed on the header menu (Name displayed outside of drawer)
  page1MenuName: 'Home', // pageMenuName sets the name displayed inside the drawer (Name displayed inside drawer)

  page2Name: "AltText",
  page2MenuName: 'Alt Text Info',

  page3Name: "Work",
  page3MenuName: 'Work',

  page4Name: "Services",
  page4MenuName: 'Services',

  page5Name: "Contact",
  page5MenuName: 'Contact',
}