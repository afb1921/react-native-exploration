// DrawerContent.js
import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItem
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { colors, def_Page } from '../constant';
import { FontAwesome } from '@expo/vector-icons';

export function DrawerContent(props) {

   // // Get screen dimensions
   const { width, height } = Dimensions.get('window');

   // console.log(Dimensions.get('window')) //For debug purposes console log the dimensions of the device screen


   return (

      <View style={{ flex: 1, backgroundColor: colors.outerContentBackground }}>

         {/* //This adjusts screen size of content inside the drawer */}
         <View 
            style={
               [styles.drawerHeader, height >= 850 && height<=900 ? {marginTop: 35, marginBottom: -40, paddingBottom: 20} : { }]
            }>
         {/* //---------------------------------------------------------------- */}

            <Text style={styles.drawerHeaderText} accessibilityLabel={def_Page.drawerTitle} accessibilityRole='header'>{def_Page.drawerTitle}</Text>
         </View>
         <DrawerContentScrollView>
            <Drawer.Section style={{ flex: 1, marginTop: 15, backgroundColor: colors.innerContentBackground }}>

               <DrawerItem
                  label={def_Page.page1MenuName}
                  onPress={() => {
                     props.navigation.navigate(def_Page.page1Name);
                  }}
                  labelStyle={[
                     styles.drawerItemLabel,
                     {
                     backgroundColor: props.state.index === 0 ? colors.activeBackground : colors.inactiveBackground, // Customize active and inactive colors
                     color: props.state.index === 0 ? colors.activeText : colors.inactiveText, // Customize active and inactive colors
                     },
                  ]}
               />
               <DrawerItem
                  label={def_Page.page2MenuName}
                  onPress={() => { props.navigation.navigate(def_Page.page2Name); }}
                  labelStyle={[
                     styles.drawerItemLabel,
                     {
                     backgroundColor: props.state.index === 1 ? colors.activeBackground : colors.inactiveBackground, // Customize active and inactive colors
                     color: props.state.index === 1 ? colors.activeText : colors.inactiveText, // Customize active and inactive colors
                     },
                  ]}
               />
               <DrawerItem
                  label={def_Page.page3MenuName}
                  onPress={() => {
                     props.navigation.navigate(def_Page.page3Name);
                  }}
                  labelStyle={[
                     styles.drawerItemLabel,
                     {
                     backgroundColor: props.state.index === 2 ? colors.activeBackground : colors.inactiveBackground, // Customize active and inactive colors
                     color: props.state.index === 2 ? colors.activeText : colors.inactiveText, // Customize active and inactive colors
                     },
                  ]}
               />
               <DrawerItem
                  label={def_Page.page4MenuName}
                  onPress={() => {
                     props.navigation.navigate(def_Page.page4Name);
                  }}
                  labelStyle={[
                     styles.drawerItemLabel,
                     {
                     backgroundColor: props.state.index === 3 ? colors.activeBackground : colors.inactiveBackground, // Customize active and inactive colors
                     color: props.state.index === 3 ? colors.activeText : colors.inactiveText, // Customize active and inactive colors
                     },
                  ]}
               />
               <DrawerItem
                  label={def_Page.page5MenuName}
                  onPress={() => {
                     props.navigation.navigate(def_Page.page5Name);
                  }}
                  labelStyle={[
                     styles.drawerItemLabel,
                     {
                     backgroundColor: props.state.index === 4 ? colors.activeBackground : colors.inactiveBackground, // Customize active and inactive colors
                     color: props.state.index === 4 ? colors.activeText : colors.inactiveText, // Customize active and inactive colors
                     },
                  ]}
               />
            </Drawer.Section>
         </DrawerContentScrollView>
      </View>
   )
}

const styles = StyleSheet.create({

   drawerHeader: {
      backgroundColor: colors.drawerHeader,
      padding: 16,
   },
   drawerHeaderText: {
      fontSize: 20,
      color: colors.drawerHeaderText,
   },
   drawerItemLabel: {
      padding: 15,
      margin: -10,
      marginLeft: 0, 
      marginRight: -30,
      fontSize: 17,
      fontWeight: "bold",
      borderRadius: 10,
   },
});





