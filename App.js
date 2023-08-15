import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar, AccessibilityInfo} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import { colors, pageInfo } from './constant';

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
          
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="AltText" component={AltText}/>
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
