import React, {useContext, useState, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, Switch, AccessibilityInfo } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

//Custom Imports-------------------------------------------------
import { def_Page } from '../constant';
//---------------------------------------------------------------

//For Theme------------------------------------------------------
import themeContext from '../Themes/themeContext';
//---------------------------------------------------------------

import DarkModeSwitch from './DarkModeSwitch'

export function DrawerContent(props) {
   const { darkModeTheme, setDarkMode } = props; // Extract darkModeTheme and setDarkMode from props


   //Theme Management------------------------------------------

   console.log(darkModeTheme)
   const { theme} = useContext(themeContext);

   const handleToggle = (value) => {
      setDarkMode(value);
      // You can emit the 'ChangeTheme' event here if needed
    };

   //----------------------------------------------------------
   
   // const [darkModeTheme, setDarkMode] = useState(true) //For switch theme (switch button essentially)
   //----------------------------------------------------------

   //Size Management-------------------------------------------
   const { width, height } = Dimensions.get('window');
   //----------------------------------------------------------

   //Item in Drawer get Style Base on Theme--------------------
   const getPageStyle = (index) => ({
      backgroundColor: props.state.index === index ?
         theme.drawerActive : theme.drawerInactive,

      color: props.state.index === index ?
         theme.drawerActiveText : theme.drawerInactiveText,
   });

   //---------------------------------------------------------

   // Render A Drawer Item------------------------------------
   const renderDrawerItem = (index, label, pageName) => (
      <DrawerItem
         label={label}
         accessibilityLabel={props.state.index === index ? `Current Page: ${label}` : label}
         onPress={() => {
         props.navigation.navigate(pageName);
         }}
         labelStyle={[styles.drawerItemLabel, getPageStyle(index)]}
      />
   );
   //---------------------------------------------------------

   return (
      <View 

         style={[
            styles.drawerOuterContent, { 
               backgroundColor: theme.drawerOuterContent, 
               borderLeftWidth: theme.drawerBorderLeftWidth, 
               borderColor: theme.drawerOuterBorder 
            }
         ]}>

         <View
            style={[

               styles.drawerHeader,

               height >= 850 && height <= 900 //Resizing based on screen size
                  ? { marginTop: 35, marginBottom: -40, paddingBottom: 20 }
                  : {},

               { backgroundColor: theme.drawerHeader },
            ]}
         >
            <Text
               style={[styles.drawerHeaderText, { color: theme.drawerHeaderText }]}
               accessibilityLabel={def_Page.drawerTitle}
               accessibilityRole='header'
            >
               {def_Page.drawerTitle}
            </Text>

         </View>

         <DrawerContentScrollView>

            <Drawer.Section style={[
               styles.drawerInnerSection,
               {
                  borderRadius: theme.drawerInnerBorderRadius,
                  borderBottomWidth: theme.drawerBorderBottomWidth,
                  borderColor: theme.drawerInnerBorder,
                  backgroundColor: theme.drawerInnerContent,
               }]}
            >
               {renderDrawerItem(0, def_Page.page1MenuName, def_Page.page1Name)}
               {renderDrawerItem(1, def_Page.page2MenuName, def_Page.page2Name)}
               {renderDrawerItem(2, def_Page.page3MenuName, def_Page.page3Name)}
               {renderDrawerItem(3, def_Page.page4MenuName, def_Page.page4Name)}
               {renderDrawerItem(4, def_Page.page5MenuName, def_Page.page5Name)}

            </Drawer.Section>

            <DarkModeSwitch
               darkModeTheme={darkModeTheme}
               setDarkMode={setDarkMode}
               onToggle={() => {
                  // console.log(toggleButtonRef.current._nativeTag)
               }}
            />
         </DrawerContentScrollView>



      </View>
   );
}

const styles = StyleSheet.create({
   drawerHeader: {
      padding: 16,
   },
   drawerHeaderText: {
      fontSize: 20,
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
   },
   drawerOuterContent: {
      flex: 1,
   },
});
