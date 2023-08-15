// DrawerContent.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItem
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { colors, pageInfo } from '../constant';


export function DrawerContent(props) {
   return (

      <View style={{ flex: 1, backgroundColor: colors.outerContentBackground }}>
         <View style={styles.drawerHeader}>
            <Text style={styles.drawerHeaderText} accessibilityLabel="Accessiblity Demo" accessibilityRole='header'>Accessiblity Demo</Text>
         </View>
         <DrawerContentScrollView>
            <Drawer.Section style={{ flex: 1, marginTop: 15, backgroundColor: colors.innerContentBackground }}>

               <DrawerItem
                  label={pageInfo.page1MenuName}
                  onPress={() => {
                     props.navigation.navigate('Home');
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
                  label={pageInfo.page2MenuName}
                  onPress={() => { props.navigation.navigate('AltText'); }}
                  labelStyle={[
                     styles.drawerItemLabel,
                     {
                     backgroundColor: props.state.index === 1 ? colors.activeBackground : colors.inactiveBackground, // Customize active and inactive colors
                     color: props.state.index === 1 ? colors.activeText : colors.inactiveText, // Customize active and inactive colors
                     },
                  ]}
               />
               <DrawerItem
                  label={pageInfo.page3MenuName}
                  onPress={() => {
                     props.navigation.navigate('Work');
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
                  label={pageInfo.page4MenuName}
                  onPress={() => {
                     props.navigation.navigate('Services');
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
                  label={pageInfo.page5MenuName}
                  onPress={() => {
                     props.navigation.navigate('Contact');
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





