import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners';


//Custom Imports------------------------------------------------
import { colors, def_Page } from './constant';
import { darkMode, lightMode } from './Themes/defaultThemes';
//---------------------------------------------------------------

//Components-----------------------------------------------------
import { DrawerContent } from './components/DrawerContent';
import CustomHeaderRight from './components/CustomHeaderRight';
import themeContext from './Themes/themeContext';
//---------------------------------------------------------------

//Screens--------------------------------------------------------

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
// --------------------------------------------------------------

const Drawer = createDrawerNavigator();

function App() {

  //Theme Managment----------------------------------------------------------
  const [darkModeTheme, setDarkMode] = useState(false);
  const theme = darkModeTheme ? darkMode : lightMode;

  useEffect(() => {
    console.log(theme) //debug prints Theme CSS
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
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
    { name: def_Page.page1Name, component: HomeScreen, icon: 'universal-access' },
    { name: def_Page.page2Name, component: AltText, icon: 'universal-access' },
    { name: def_Page.page3Name, component: Page3Screen, icon: 'briefcase' },
    { name: def_Page.page4Name, component: Page4Screen, icon: 'cog' },
    { name: def_Page.page5Name, component: Page5Screen, icon: 'envelope' },
  ];

  //------------------------------------------------------------------------------------------------

  return (
    <themeContext.Provider value={darkModeTheme === true ? darkMode : lightMode}>
      
      


      <View style={styles.container}>

        {/* Status Bar --------------------------- */}
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.statusBarColor}
        />
        {/* //-------------------------------------*/}
        

        {/* Navigation Container */}
        <NavigationContainer>

          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
              headerStyle: { backgroundColor: theme.headerBackground },
              drawerPosition: 'right', //Drawer will slide from direction given
              headerLeft: false, //Default Hamburger is on left, header left set to false for custom right side hamburger menu
              headerRight: () => <CustomHeaderRight navigation={navigation} />, //custom right side hamburger
            })}
          >
            {screens.map((screen, index) => (
              <Drawer.Screen
                key={index}
                name={screen.name} //This is configurable in the screens array
                component={screen.component}
                options={() => ({
                  title: def_Page.setCommonLabel ? def_Page.commonLabel : screen.name,
                  headerTitle: () => (
                    <View style={styles.headerContainer}>
                      <FontAwesome
                        name={screen.icon} //This is configurable in the screens array
                        style={[styles.headerIcon, { color: theme.headerIcon }]}
                        importantForAccessibility='no' //This hides the icon from screen readers its decoration therefore needs hidden
                      />
                      <Text
                        style={[styles.headerText, { color: theme.titleColor }]}
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
