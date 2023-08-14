import React, { useEffect, useState} from 'react';
import { View, StyleSheet, AppState, StatusBar, AccessibilityInfo} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import { colors } from './constant';

//Components-----------------------------------------------------
import { DrawerContent } from './components/DrawerContent';
import CustomHeaderRight from './components/CustomHeaderRight';
//---------------------------------------------------------------

//Screens--------------------------------------------------------
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import WorkScreen from './Screens/WorkScreen';
import ServicesScreen from './Screens/ServicesScreen';
import Contact from './Screens/Contact';
// --------------------------------------------------------------

const Drawer = createDrawerNavigator();

function App() {

  const [appState, setAppState] = useState('active');
  const [statusBarTextColor] = useState('light-content');

  //When the app is rendered, useEffect() triggers
  useEffect(() => {

    console.log('app.js useEffect'); //For debugging purposes

    const handleAppStateChange = (nextAppState) => {
      setAppState(nextAppState);
    };

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };



  }, []);
  //----------------------------------------

  return (
    <View style={styles.container}>
      {/* Status Bar ------------------*/}
      <StatusBar
        barStyle={appState === 'active' ? statusBarTextColor : 'light-content'}
        backgroundColor={colors.statusBarColor} // Uses the status bar color from ./constant.js */
      />
      {/* -------------------------------- */}
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props}/>}
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: colors.headerBackground }, //background color is defined in ./constant.js
            headerTintColor: colors.titleColor, //Header color is defined in ./constant.js
            drawerPosition: 'right', //drawer will open from the right side (default left)
            headerLeft: false, 
            headerRight: () => <CustomHeaderRight navigation={navigation} />, //Custom Header Right
            drawerStyle: {
              backgroundColor: 'white', //This sets the drawer color when opened
            },
          })}
        >
          {/* These are the screens displayed inside the drawer when opened */}
          
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Work" component={WorkScreen} />
          <Drawer.Screen name="Services" component={ServicesScreen} />
          <Drawer.Screen name="Contact" component={Contact} />

          {/* ------------------------------------------------------------- */}

        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
