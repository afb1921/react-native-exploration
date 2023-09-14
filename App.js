import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners';


//Custom Imports
//================================================================
import { def_Page } from './constant';
import { darkMode, lightMode } from './Themes/defaultThemes';
//================================================================

//Component
//================================================================
import { DrawerContent } from './components/DrawerContent';
import CustomHeaderRight from './components/CustomHeaderRight';
import themeContext from './Themes/themeContext';
//================================================================

//Screens
//================================================================

//To add a new screen--------------------------
//Step 1: Create and Rename the Screen under the "Screens" folder (Use my default Template)

//Step 2: import the screen in this format "import ScreenComponentName from "file location";"
  //EXAMPLE: import HomeScreen from './Screens/HomeScreen';

//Step 3: Open the constant.js file and add your screen labeling settings heres an exmaple for home screen:
  //page1Name: "Home",  // pageName sets the name of the page when displayed on the header menu (Name displayed outside of drawer)
  //page1MenuName: 'Home', // pageMenuName sets the name displayed inside the drawer (Name displayed inside drawer)

//Step 3: Visit the Screen configuration section in this file and app your screen settings here's an example for home screen:
  //{ name: def_Page.page1Name, component: HomeScreen, icon: 'universal-access' },

//Step 4: After that the screen should be all hooked up and work in the drawer menu
//-----------------------------------------------

import HomeScreen from './Screens/HomeScreen';
import AltText from './Screens/AltText';
import Page3Screen from './Screens/Page3';
import Page4Screen from './Screens/Page4';
import Page5Screen from './Screens/Page5';
//================================================================

const Drawer = createDrawerNavigator();

function App() {

  //Theme Managment----------------------------------------------------------
  const [darkModeTheme, setDarkMode] = useState(def_Page.setDarkMode); //setDarkMode switches the state of darkModeTheme state
  const theme = darkModeTheme ? darkMode : lightMode;  ///This controls the inital state of the theme
  const toggleButtonRef = useRef(null); //Reference of toggleButton

  //Use effect will trigger everytime the app is first loaded
  useEffect(() => {
    // console.log(darkModeTheme)
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => { //listens to if the theme changes
      setDarkMode(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener);
    }
  }, [darkModeTheme])
  //------------------------------------------------------------------------


  // Define an array of screen configurations
  //--------------------------------------------------------------------------------------------------
  //name is the name of the screen set in def_Page if commonLabel is set to "false" it will display
  //component is the name of the imported component under "Screens" in this file!
  //icon is the name of the icon you want displayed using font awesome icons


  const screens = [
    { name: def_Page.page1Name, menu_name: def_Page.page1MenuName, component: HomeScreen, icon: 'universal-access' },
    { name: def_Page.page2Name, menu_name: def_Page.page2MenuName, component: AltText, icon: 'universal-access' },
    { name: def_Page.page3Name, menu_name: def_Page.page3MenuName, component: Page3Screen, icon: 'briefcase' },
    { name: def_Page.page4Name, menu_name: def_Page.page4MenuName, component: Page4Screen, icon: 'cog' },
    { name: def_Page.page5Name, menu_name: def_Page.page4MenuName, component: Page5Screen, icon: 'envelope' },
  ];

  //------------------------------------------------------------------------------------------------

  return (

    <themeContext.Provider value={{theme, toggleButtonRef}}> 

      <View style={styles.container}>

        {/* Status Bar=============== */}
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.statusBar}
        />
        {/* //=========================*/}

        {/* Navigation Container */}
        <NavigationContainer>

          <Drawer.Navigator
            drawerContent={(props) => 
              <DrawerContent {...props}
              darkModeTheme={darkModeTheme} // Pass darkModeTheme as a prop
              setDarkMode={setDarkMode} // Pass setDarkMode as a prop
              screens={screens} //pass screens as a prop
            />}
            screenOptions={({ navigation }) => ({
              headerStyle: { backgroundColor: theme.headerMenu},
              drawerPosition: 'right', //Drawer will slide from direction given
              headerLeft: false, //Default Hamburger is on left, header left set to false for custom right side hamburger menu
              headerRight: () => 
                <CustomHeaderRight 
                  navigation={navigation}
                />, //custom right side hamburger
            })}
          >
            {screens.map((screen, index) => (
              <Drawer.Screen
                key={index}
                name={screen.name} //This is configurable in the screens array
                component={screen.component}
                options={() => ({
                  headerTitle: () => (
                    <View style={styles.headerContainer}>

                      {/* Header Menu Icon=========================*/}
                      <FontAwesome
                        name={screen.icon} //The icon, This is configurable in the screens array
                        style={[styles.headerIcon, { color: theme.headerIcon }]}
                        importantForAccessibility='no' //This hides the icon from screen readers its decoration therefore needs hidden
                        accessible={false}
                      />
                      {/* //=========================================*/}
                      <Text
                        style={[styles.headerText, { color: theme.titleText }]}
                      >
                        {/* if def_Page.setCommonLabel is true then text will be def_Page.commonLabel else screen.name */}
                        {def_Page.setCommonLabel ? def_Page.commonLabel : screen.name} 
                      </Text>
                    </View>
                  ),

                })}
              />
            ))}
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
      

    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    fontSize: 30,
    marginRight: 10,

  },

});

export default App;
