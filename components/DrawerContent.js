// DrawerContent.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItem
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { colors, def_Page } from '../constant';


export function DrawerContent(props) {
   return (

      <View style={{ flex: 1, backgroundColor: colors.outerContentBackground }}>
         <View style={styles.drawerHeader}>
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





