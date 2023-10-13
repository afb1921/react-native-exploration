import 'react-native-gesture-handler';
import React, { useState, useRef, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

//Custom Imports
//================================================================
import { def_Page } from './constant';
import { darkMode, lightMode } from './Themes/defaultThemes';
import themeContext from './Themes/themeContext';
import HeaderRight from './navigation/HeaderRight';
import { drawerItemsMain } from './navigation/drawerItemsMain';
import DrawerContent from './navigation/DrawerContent.js';
//================================================================


//Screen Imports
//================================================================
import Subitem1Component from './screens/Subitem1Component';
import Home from './screens/HomeScreen';
import ExampleComponents from './screens/ExampleComponents';
//================================================================

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Settings2Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings 2 Screen</Text>
    </View>
  );
}

function MainDrawerNavigation() {
  const { theme, setTheme, themeState } = useContext(themeContext);
  return (
    <Drawer.Navigator
      screenOptions={({
        drawerPosition: 'right',
        headerLeft: false, //Default Hamburger is on left, header left set to false for custom right side hamburger menu
      })}
      initialRouteName="Home"
      drawerContent={(props) => (
        <DrawerContent drawerItems={drawerItemsMain} {...props} />
      )}>
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Drawer.Screen name="Subitem1Component" component={Subitem1Component} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings2" component={Settings2Screen} options={{ headerShown: false }} />
      <Drawer.Screen name="ExampleComponents" component={ExampleComponents} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}

function App() {

  //Theme Managment
  //================================================
  const [themeState, setTheme] = useState(def_Page.setDarkMode); //switches the state of Theme state
  const theme = themeState ? darkMode : lightMode;  ///This controls the inital state of the theme
  const toggleButtonRef = useRef(null); //Reference of toggleButton
  //================================================

  return (
    <themeContext.Provider value={{ theme, toggleButtonRef, setTheme, themeState }}>

      <StatusBar
        barStyle={"light-content"}
        backgroundColor={theme.app_Header.statusBar}
      />
      <NavigationContainer>
        
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerRight: () => <HeaderRight navigation={navigation} />,
            headerLeft: () =>  
              <FontAwesome
                name="universal-access" //The icon, This is configurable in the screens array
                style={[styles.headerIcon, { color: theme.app_Header.headerIcon }]}
                importantForAccessibility='no' //This hides the icon from screen readers its decoration therefore needs hidden
                accessible={false}
              />,
            headerStyle: {
              backgroundColor: theme.app_Header.headerMenu, // Customize the background color for the stack navigator
            },
            headerTitleStyle: {
              color: theme.app_Header.titleText,
            },
          })}
        >
          <Stack.Screen name={def_Page.commonLabel} component={MainDrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>

    </themeContext.Provider>



  );
};

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

