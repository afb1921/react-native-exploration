import React, {useContext, useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';
import { DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { def_Page } from '../constant';
import { darkMode, lightMode } from '../Themes/defaultThemes';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


//Theme Imports---------------------------------------------------
import themeContext from '../Themes/themeContext';
//----------------------------------------------------------------

const CustomHeaderRight = ({ navigation }) => {

  //Theme Manangement-----------------------------------------------
  const theme = useContext(themeContext)
  //----------------------------------------------------------------

  const handleMenuPress = () => {

    navigation.dispatch(DrawerActions.openDrawer());

    const delay = 200

    setTimeout(() => {
      // Announce the action to screen readers
      AccessibilityInfo.announceForAccessibility('Opened Menu Drawer');
      console.log("Opened Menu Drawer")
    }, delay);
    
  };


  return (
    <TouchableOpacity 
      onPress={handleMenuPress}
    >
      <Icon 
        name="bars" 
        size={30} 
        style={[styles.hamburgerIcon, {color: theme.hamburgerIcon}]} 
        accessibilityLabel='Menu Drawer' 
        accessibilityRole='menu' 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hamburgerIcon: {
    marginHorizontal: 20
  }
  
});

export default CustomHeaderRight;
