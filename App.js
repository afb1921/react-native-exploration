import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar, AccessibilityInfo, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { colors, def_Page } from './constant';
import { FontAwesome } from '@expo/vector-icons';


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
  const screens = [

    //name is the name of the screen set in def_Page if commonLabel is set to "false" it will display
    //component is the name of the imported component under "Screens" in this file!

    { name: def_Page.page1Name, component: HomeScreen },
    { name: def_Page.page2Name, component: AltText },
    { name: def_Page.page3Name, component: WorkScreen },
    { name: def_Page.page4Name, component: ServicesScreen },
    { name: def_Page.page5Name, component: Contact },
  ];

  return (
    <View style={styles.container}>
      {/* Status Bar ------------------*/}
      <StatusBar
        barStyle={colors.iconColor} // Set the text color for icons *options include only dark-content and light-content*
        backgroundColor={colors.statusBarColor} // Set the background color from contant colors
      />
      {/* -------------------------------- */}
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: colors.headerBackground }, //background color is defined in ./constant.js
            headerTintColor: colors.titleColor, //Header color is defined in ./constant.js
            drawerPosition: 'right', //drawer will open from the right side (default left)
            headerLeft: false,
            headerRight: () => <CustomHeaderRight navigation={navigation} />, //Custom Header Right
          })}
        >
          {/* Map over the screens array to generate Drawer.Screen components */}
          {screens.map((screen, index) => (
            <Drawer.Screen
              key={index}
              options={def_Page.setCommonLabel ? {
                title: (
                  <View style={styles.headerContainer}>
                    <FontAwesome name="universal-access" style={styles.headerIcon} /> 
                    <Text style={styles.headerText}>{def_Page.commonLabel}</Text>
                  </View>
                )
              } : {}}
              name={screen.name}
              component={screen.component}
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
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon:{
    color: 'white',
    marginRight: 10,
    fontSize: 30,
  }

});

export default App;
