import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {ThemeProvider} from 'styled-components';

//Constants
import { colors, def_Page, heading } from './constant';
import { darkMode, lightMode } from './Themes/defaultThemes';

//Components-----------------------------------------------------
import { DrawerContent } from './components/DrawerContent';
import CustomHeaderRight from './components/CustomHeaderRight';
//---------------------------------------------------------------

//Screens--------------------------------------------------------
import HomeScreen from './Screens/HomeScreen';
import AltText from './Screens/AltText';
import WorkScreen from './Screens/WorkScreen';
import ServicesScreen from './Screens/ServicesScreen';
import Contact from './Screens/Contact';
// --------------------------------------------------------------

const Drawer = createDrawerNavigator();

function App() {

  // Define an array of screen configurations

  //name is the name of the screen set in def_Page if commonLabel is set to "false" it will display
  //component is the name of the imported component under "Screens" in this file!
  //icon is the name of the icon you want displayed using font awesome icons


  const screens = [
    { name: def_Page.page1Name, component: HomeScreen, icon: 'universal-access' },
    { name: def_Page.page2Name, component: AltText, icon: 'universal-access' },
    { name: def_Page.page3Name, component: WorkScreen, icon: 'briefcase' },
    { name: def_Page.page4Name, component: ServicesScreen, icon: 'cog' },
    { name: def_Page.page5Name, component: Contact, icon: 'envelope' },
  ];

  return (
      <View style={styles.container}>
        {/* Status Bar */}
        <StatusBar

          barStyle={def_Page.setDarkMode
            ? darkMode.iconColor
            : lightMode.iconColor}

          backgroundColor={def_Page.setDarkMode
            ? darkMode.statusBarColor
            : lightMode.statusBarColor}
        />
        {/* Navigation Container */}
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
              headerStyle: styles.headerBackground,
              headerTintColor: colors.titleColor,
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
                        style={styles.headerIcon}
                        importantForAccessibility='no' //This hides the icon from screen readers its decoration therefore needs hidden
                      />
                      <Text
                        style={styles.headerText}
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
    color: def_Page.setDarkMode
      ? darkMode.titleColor
      : lightMode.titleColor,

  },
  headerIcon: {
    fontSize: 30,
    marginRight: 10,
    color: def_Page.setDarkMode
      ? darkMode.headerIcon
      : lightMode.headerIcon,
  },
  headerBackground: {
    backgroundColor: def_Page.setDarkMode
      ? darkMode.headerBackground
      : lightMode.headerBackground,
  },




});

export default App;
