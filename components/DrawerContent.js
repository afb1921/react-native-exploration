// DrawerContent.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
 } from '@react-navigation/drawer';
 import { Drawer } from 'react-native-paper';

 export function DrawerContent(props) {
    return(
        
      <View style={{flex: 1}}>
         <View style={styles.drawerHeader}>
            <Text style={styles.drawerHeaderText} accessibilityLabel="Accessiblity Demo" accessibilityRole='header'>Accessiblity Demo</Text>
         </View>
         <DrawerContentScrollView>
            <Drawer.Section style={{flex: 1, marginTop: 15}}>

               <DrawerItem label="Home" onPress={() => {props.navigation.navigate('Home')}} />
               <DrawerItem label="About Us" onPress={() => {props.navigation.navigate('About')}} />
               <DrawerItem label="What We Do" onPress={() => {props.navigation.navigate('Work')}} />
               <DrawerItem label="Services" onPress={() => {props.navigation.navigate('Services')}} />
               <DrawerItem label="Contact Us" onPress={() => {props.navigation.navigate('Contact')}} />

               
            </Drawer.Section>
         </DrawerContentScrollView>


      </View>
    )
 }

 const styles = StyleSheet.create({

   drawerHeader: {
      backgroundColor: 'blue',
      padding: 16,
    },
    drawerHeaderText: {
      fontSize: 20,
      color: 'white',
    },
  });
  
  
  
  
  
  