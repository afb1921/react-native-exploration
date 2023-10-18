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

export const def_App = {

  commonLabel: "Accessibility Demo", //Label for App Header

  //***INITAL STATE OF THEME***
  //================================================
  //SWITCHES APP COLORS BETWEEN "lightMode" AND "darkMode" 
  setDarkMode: false, // OPTIONS 'true' or 'false'
  //================================================
}