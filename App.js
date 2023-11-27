import 'react-native-gesture-handler';
import React, { useState, useRef, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';

//Custom Imports
//================================================================
import { def_App } from './constant';
import { darkMode, lightMode } from './themes/defaultThemes.js';
import themeContext from './themes/themeContext.js';
import HeaderRight from './navigation/HeaderRight';
import { drawerItemsMain } from './navigation/drawerItemsMain';
import DrawerContent from './navigation/DrawerContent.js';
//================================================================

//Screen Imports
//================================================================
import Home from './screens/HomeScreen.js';
import ScreenReaderCheck from './screens/ScreenReaderEnabledCheck.js';

//Component Screens
import ExampleComponents from './screens/ExampleComponents.js';
import AccessibilityProperties from './screens/AccessibilityProperties.js';
import TableExamples from './screens/example_components/TableExamples.js';
import AccordionExample from './screens/example_components/AccordionExample.js';
import CheckboxExample from './screens/example_components/CheckboxExample.js';
import ComboboxExample from './screens/example_components/ComboboxExample.js';
import VideoplayerExample from './screens/example_components/VideoplayerExample.js';
import ImageExample from './screens/example_components/ImageExample.js';
import ListExamples from './screens/example_components/ListExamples.js';
import ModalSelectionExample from './screens/example_components/ModalSelectionExample.js';
import ExternalLinkExample from './screens/example_components/ExternalLinkExample.js';
import DropdownExample from './screens/example_components/DropdownExample.js';
import RadioButtonExample from './screens/example_components/RadioButtonExample.js';
import TextFieldExample from './screens/example_components/TextFieldExample.js';

//Accessibility Properties Screens
import AccessibleProp from './screens/accessibility_prop_examples/AccessibleProp.js'
import AccessibilityLabelProp from './screens/accessibility_prop_examples/AccessibilityLabelProp.js';
import AccessibilityHintProp from './screens/accessibility_prop_examples/AccessibilityHintProp.js';
import AccessibilityRoleProp from './screens/accessibility_prop_examples/AccessibilityRoleProp.js';
import AccessibilityLabelledByProp from './screens/accessibility_prop_examples/android_only/AccessibilityLabelledByProp.js';
import AccessibilityLiveRegionProp from './screens/accessibility_prop_examples/android_only/AccessibilityLiveRegionProp.js';
import AccessibilityElementsHiddenProp from './screens/accessibility_prop_examples/ios_only/AccessibilityElementsHiddenProp.js';
import AccessibilityLanguageProp from './screens/accessibility_prop_examples/ios_only/AccessibilityLanguageProp.js';
import AccessibilityViewIsModalProp from './screens/accessibility_prop_examples/ios_only/AccessibilityViewIsModalProp.js';
import ImportantForAccessibility from './screens/accessibility_prop_examples/android_only/ImportantForAccessibilityProp.js';
import AccessibilityValueProp from './screens/accessibility_prop_examples/AccessibilityValueProp.js';
import AccessibilityStateProp from './screens/accessibility_prop_examples/AccessibilityStateProp.js';
//================================================================

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainDrawerNavigation() {
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
      <Drawer.Screen name="ScreenReaderCheck" component={ScreenReaderCheck} options={{ headerShown: false }} />
      {/* Components */}
      {/* ================================================================ */}
      <Drawer.Screen name="Tables" component={TableExamples} options={{ headerShown: false }} />
      <Drawer.Screen name="Accordion" component={AccordionExample} options={{ headerShown: false }} />
      <Drawer.Screen name="CheckBox" component={CheckboxExample} options={{ headerShown: false }} />
      <Drawer.Screen name="ComboBox" component={ComboboxExample} options={{ headerShown: false }} />
      <Drawer.Screen name="VideoPlayer" component={VideoplayerExample} options={{ headerShown: false }} />
      <Drawer.Screen name="Image" component={ImageExample} options={{ headerShown: false }} />
      <Drawer.Screen name="Lists" component={ListExamples} options={{ headerShown: false }} />
      <Drawer.Screen name="Dropdown" component={DropdownExample} options={{ headerShown: false }} />
      <Drawer.Screen name="ModalSelection" component={ModalSelectionExample} options={{ headerShown: false }} />
      <Drawer.Screen name="LinkButton" component={ExternalLinkExample} options={{ headerShown: false }} />
      <Drawer.Screen name="RadioButton" component={RadioButtonExample} options={{ headerShown: false }} />
      <Drawer.Screen name="TextField" component={TextFieldExample} options={{ headerShown: false }} />
      {/* ================================================================ */}

      {/* Accessibility Properties For Both iOS and Android */}
      {/* ================================================================ */}
      <Drawer.Screen name="Accessible" component={AccessibleProp} options={{ headerShown: false }} />
      <Drawer.Screen name="Label" component={AccessibilityLabelProp} options={{ headerShown: false }} />
      <Drawer.Screen name="Hint" component={AccessibilityHintProp} options={{ headerShown: false }} />
      <Drawer.Screen name="Role" component={AccessibilityRoleProp} options={{ headerShown: false }} />
      <Drawer.Screen name="Value" component={AccessibilityValueProp} options={{ headerShown: false }} />
      <Drawer.Screen name="State" component={AccessibilityStateProp} options={{ headerShown: false }} />
      {/* ================================================================ */}

      {/* Accessibility Properties for Android */}
      {/* ================================================================ */}
      <Drawer.Screen name="LabelledBy" component={AccessibilityLabelledByProp} options={{ headerShown: false }} />
      <Drawer.Screen name="LiveRegion" component={AccessibilityLiveRegionProp} options={{ headerShown: false }} />
      <Drawer.Screen name="ImportantForAccessibility" component={ImportantForAccessibility} options={{ headerShown: false }} />
      {/* ================================================================ */}

      {/* Accessibility Properties for iOS */}
      {/* ================================================================ */}
      <Drawer.Screen name="ElementsHidden" component={AccessibilityElementsHiddenProp} options={{ headerShown: false }} />
      <Drawer.Screen name="Language" component={AccessibilityLanguageProp} options={{ headerShown: false }} />
      <Drawer.Screen name="ViewIsModal" component={AccessibilityViewIsModalProp} options={{ headerShown: false }} />
      {/* ================================================================ */}



    </Drawer.Navigator>
  );
}

function App() {

  //Theme Managment
  //================================================
  const [themeState, setTheme] = useState(def_App.setDarkMode); //switches the state of Theme state
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
          <Stack.Screen name={def_App.commonLabel} component={MainDrawerNavigation} />
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

