import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar, AccessibilityInfo} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import { colors, def_Page } from './constant';

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
  //----------------------------------------
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
          drawerContent={(props) => <DrawerContent {...props}/>}
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: colors.headerBackground }, //background color is defined in ./constant.js
            headerTintColor: colors.titleColor, //Header color is defined in ./constant.js
            drawerPosition: 'right', //drawer will open from the right side (default left)
            headerLeft: false, 
            headerRight: () => <CustomHeaderRight navigation={navigation} />, //Custom Header Right
          })}
        >
          {/* These are the screens displayed inside the drawer when opened */}
          {/* def_Page is located in constant.js this is where you can set the drawer page name and page name */}
          
          {/* -------------------------------------------------------------------------------- */}
          {/* if def_Page 'setCommonLabel' is true set the title to def_Page 'commonLabel' 
          if false set to {} therefore instead taking the def_Page pageName */}

          {/* options={def_Page.setCommonLabel ? { title: def_Page.commonLabel} : {}} */}
          {/* -------------------------------------------------------------------------------- */}

          <Drawer.Screen 
            options={def_Page.setCommonLabel ? { title: def_Page.commonLabel} : {}}
            name={def_Page.page1Name} 
            component={HomeScreen}/>
          <Drawer.Screen
            options={def_Page.setCommonLabel ? { title: def_Page.commonLabel} : {}}
            name={def_Page.page2Name}
            component={AltText}/>
          <Drawer.Screen             
            options={def_Page.setCommonLabel ? { title: def_Page.commonLabel} : {}}
            name={def_Page.page3Name} 
            component={WorkScreen} />
          <Drawer.Screen             
            options={def_Page.setCommonLabel ? { title: def_Page.commonLabel} : {}}
            name={def_Page.page4Name} 
            component={ServicesScreen} />
          <Drawer.Screen             
            options={def_Page.setCommonLabel ? { title: def_Page.commonLabel} : {}}
            name={def_Page.page5Name} 
            component={Contact} />

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
