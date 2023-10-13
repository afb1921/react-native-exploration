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
        accessible={true}
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
        accessible={true}
      >
        {children}
      </Text>
    );
  }),

  Heading3: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 16,
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
        accessible={true}    
      >
        {children}
      </Text>
    );
  }),
};

export const colors = {
  //App Colors//-----------------------

  primaryBlue: "#1DA1F2", //Twitter Blue 
  darkBlue: "#2d60fa",
  brightBlue: "#039fff",
  lightGreen: "#42f5a1",
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

  //***INITAL STATE OF THEME***
  //================================================
  //SWITCHES APP COLORS BETWEEN "lightMode" AND "darkMode" 
  setDarkMode: false, // OPTIONS 'true' or 'false'
  //================================================

  //------------------------------------------------

  drawerTitle: "Demo Pages", // drawerTitle sets the title of the drawer when opened

  page1Name: "Home",  // pageName sets the name of the page when displayed on the header menu (Name displayed outside of drawer)
  page1MenuName: 'Home', // pageMenuName sets the name displayed inside the drawer (Name displayed inside drawer)

  page2Name: "AltText",
  page2MenuName: 'Alt Text Info',

  page3Name: "Accessibility Properties",
  page3MenuName: 'Accessibility Properties',

  page4Name: "Example Components",
  page4MenuName: 'Example Components',

  page5Name: "Page 5",
  page5MenuName: "Page 5 (PLACEHOLDER)",

  page6Name: "Subitem1Component",
  page6MenuName: "Page 6 (PLACEHOLDER)",
}