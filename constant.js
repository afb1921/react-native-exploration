import React from 'react';
import {Text} from 'react-native';

export const heading = {

    // Heading Styles
    Heading1: React.forwardRef(({ children, ...restProps }, ref) => {
        return (
          <Text
            {...restProps}
            ref={ref}
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 16,
            }}
            accessibilityRole='header'
          >
            {children}
          </Text>
        );
      }),
    
      Heading2: React.forwardRef(({ children, ...restProps }, ref) => {
        return (
          <Text
            {...restProps}
            ref={ref}
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 16,
            }}
            accessibilityRole='header'
          >
            {children}
          </Text>
        );
      }),
    
      Heading3: React.forwardRef(({ children, ...restProps }, ref) => {
        return (
          <Text
            {...restProps}
            ref={ref}
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 16,
            }}
            accessibilityRole='header'
          >
            {children}
          </Text>
        );
      }),
};
    


export const colors = {
//App Colors//-----------------------

lightGrey: '#ebeded', //custom light grey color
primaryBlue: "#1DA1F2", //Twitter Blue
brightBlue: "#039fff", 

    //Drawer Colors//-----------------------
    drawerHeader: '#039fff', //Color for drawer header
    drawerHeaderText: 'white', //Color for drawer header text
    outerContentBackground: '#ebeded', //Color for drawer Outer content background
    innerContentBackground: 'white', //Color for drawer inner content background

    inactiveText: 'black', //Color for inactive navigation Text
    activeText: 'white', //Color for active navigation Text

    inactiveBackground: 'white', //Color for inactive navigation Background
    activeBackground: "#1DA1F2", //Color for active navigation Background


    //Header Colors//-----------------------
    headerBackground: '#1f1f1f', //Color for header background for each page
    titleColor: 'white', //Color for title for each page
    hamburgerIcon: 'white', //Color for hamburger icon

    //Status Bar Colors//-----------------------
    statusBarColor: "black", //Color for status bar
    iconColor: 'light-content', //*NOTE* only options include (dark-content, light-content)
//------------------------------------
}

export const def_Page ={

    //------------------------------------------------
    // if setCommonLabel is true commonLabel will replace the pageName Label to be displayed
    // if setCommonLabel is false pageName will be displayed on the header menu
    
    setCommonLabel: true, // OPTIONS 'true' or 'false'

    commonLabel: "Accessibility Demo",

    //------------------------------------------------

    drawerTitle: "Accessibility Demo", // drawerTitle sets the title of the drawer when opened

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