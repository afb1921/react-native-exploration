import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Switch } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

//Custom Imports-------------------------------------------------
import { def_Page } from '../constant';
//---------------------------------------------------------------

//For Theme------------------------------------------------------
import { EventRegister } from 'react-native-event-listeners'; //Event Register used to switch theme (switch button essentially)
import themeContext from '../Themes/themeContext';
//---------------------------------------------------------------

export function DrawerContent(props) {


   //Theme Management------------------------------------------
   const theme = useContext(themeContext)
   const [darkModeTheme, setDarkMode] = useState(false) //For switch theme (switch button essentially)
   //----------------------------------------------------------

   //Size Management-------------------------------------------
   const { width, height } = Dimensions.get('window');
   //----------------------------------------------------------

   //Item in Drawer get Style Base on Theme--------------------
   const getPageStyle = (index) => ({
      backgroundColor: props.state.index === index ?
         theme.activeBackground : theme.inactiveBackground,

      color: props.state.index === index ?
         theme.activeText : theme.inactiveText,
   });

   //---------------------------------------------------------



   // Render A Drawer Item------------------------------------
   const renderDrawerItem = (index, label, pageName) => (
      <DrawerItem
         label={label}
         onPress={() => {
            props.navigation.navigate(pageName);
         }}
         labelStyle={[styles.drawerItemLabel, getPageStyle(index)]}
      />
   );
   //---------------------------------------------------------

   return (
      <View style={[styles.drawerOuterContent, {backgroundColor: theme.outerContentBackground, borderLeftWidth: theme.borderLeftWidth, borderColor: theme.outerBorderColor }]}>
         <View
            style={[

               styles.drawerHeader,

               height >= 850 && height <= 900 //Resizing based on screen size
                  ? { marginTop: 35, marginBottom: -40, paddingBottom: 20 }
                  : {},

               {backgroundColor: theme.drawerHeader},
            ]}
         >
            <Text
               style={[styles.drawerHeaderText, {color: theme.drawerHeaderText}]}
               accessibilityLabel={def_Page.drawerTitle}
               accessibilityRole='header'
            >
               {def_Page.drawerTitle}
            </Text>

         </View>

         <DrawerContentScrollView>

            <Drawer.Section style={[
               styles.drawerInnerSection, 
               {borderRadius: theme.innerBorderRadius, 
               borderBottomWidth: theme.borderBottomWidth, 
               borderColor: theme.innerBorderColor,
               backgroundColor: theme.innerContentBackground,
               } ]}
            >
               {renderDrawerItem(0, def_Page.page1MenuName, def_Page.page1Name)}
               {renderDrawerItem(1, def_Page.page2MenuName, def_Page.page2Name)}
               {renderDrawerItem(2, def_Page.page3MenuName, def_Page.page3Name)}
               {renderDrawerItem(3, def_Page.page4MenuName, def_Page.page4Name)}
               {renderDrawerItem(4, def_Page.page5MenuName, def_Page.page5Name)}

            </Drawer.Section>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               <Text 
                  style ={{color: theme.textColor}}
               >
               Dark Mode
               </Text>
               
               <Switch
                  value={darkModeTheme}
                  onValueChange={(value) => {
                     setDarkMode(value);
                     EventRegister.emit('ChangeTheme', value)
                  }}

               />
            </View>
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
