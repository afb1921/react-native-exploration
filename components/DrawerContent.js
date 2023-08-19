import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItem,
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { colors, def_Page } from '../constant';
import { FontAwesome } from '@expo/vector-icons';
import {darkMode, lightMode} from "../Themes/defaultThemes";

export function DrawerContent(props) {
   const { width, height } = Dimensions.get('window');

   const getPageStyle = (index) => ({

      backgroundColor: props.state.index === index ? 
         (def_Page.setDarkMode
            ? darkMode.activeBackground
            : lightMode.activeBackground) : 
            (def_Page.setDarkMode
               ? darkMode.inactiveBackground
               : lightMode.inactiveBackground),

      color: props.state.index === index ?
         (def_Page.setDarkMode
            ? darkMode.activeText
            : lightMode.activeText) :
         (def_Page.setDarkMode
            ? darkMode.inactiveText
            : lightMode.inactiveText),
   });

   const renderDrawerItem = (index, label, pageName) => (
      <DrawerItem
         label={label}
         onPress={() => {
            props.navigation.navigate(pageName);
         }}
         labelStyle={[styles.drawerItemLabel, getPageStyle(index)]}
      />
   );

   return (
      <View style={styles.drawerOuterContent}>
         <View
            style={[
               styles.drawerHeader,
               height >= 850 && height <= 900
                  ? { marginTop: 35, marginBottom: -40, paddingBottom: 20 }
                  : {},
            ]}
         >
            <Text
               style={styles.drawerHeaderText}
               accessibilityLabel={def_Page.drawerTitle}
               accessibilityRole='header'
            >
               {def_Page.drawerTitle}
            </Text>
         </View>
         <DrawerContentScrollView>
            <Drawer.Section style={styles.drawerInnerSection}>
               {renderDrawerItem(0, def_Page.page1MenuName, def_Page.page1Name)}
               {renderDrawerItem(1, def_Page.page2MenuName, def_Page.page2Name)}
               {renderDrawerItem(2, def_Page.page3MenuName, def_Page.page3Name)}
               {renderDrawerItem(3, def_Page.page4MenuName, def_Page.page4Name)}
               {renderDrawerItem(4, def_Page.page5MenuName, def_Page.page5Name)}
            </Drawer.Section>
         </DrawerContentScrollView>
      </View>
   );
}

//Styles use many ternary operators it is a shorthand way 
//to write conditional statements in JavaScript, and it can be used 
//to make decisions and return values based on conditions.
//------------------------------------------------------------------------------------------

//The ternary operator has the following syntax:

//condition ? valueIfTrue : valueIfFalse;
//-------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
   drawerHeader: {
      padding: 16,

      backgroundColor: def_Page.setDarkMode
         ? darkMode.drawerHeader
         : lightMode.drawerHeader,

   },
   drawerHeaderText: {
      fontSize: 20,

      color: def_Page.setDarkMode
         ? darkMode.drawerHeaderText
         : lightMode.drawerHeaderText,
   },
   drawerItemLabel: {
      padding: 15,
      margin: -10,
      marginLeft: 0,
      marginRight: -30,
      fontSize: 17,
      fontWeight: 'bold',
      borderRadius: 10,
   },
   drawerInnerSection: {
      flex: 1,
      marginTop: 15,

      borderRadius: def_Page.setDarkMode
       ? 8 : 0,

      borderBottomWidth: def_Page.setDarkMode
       ? 3 : 0,

      borderColor: def_Page.setDarkMode 
       ? darkMode.innerBorderColor
       : "",    

      backgroundColor: def_Page.setDarkMode
         ? darkMode.innerContentBackground
         : lightMode.innerContentBackground,
   },
   drawerOuterContent: {
      flex: 1,
 
      borderLeftWidth: def_Page.setDarkMode
       ? 5 : 0,
      
      borderColor: def_Page.setDarkMode 
      ? darkMode.outerBorderColor
      : 0,    

      backgroundColor: def_Page.setDarkMode
         ? darkMode.outerContentBackground
         : lightMode.outerContentBackground,

      
   },
});
