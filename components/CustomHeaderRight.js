import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, def_Page } from '../constant';
import { darkMode, lightMode } from '../Themes/defaultThemes';


const CustomHeaderRight = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Icon name="bars" size={30} style={styles.hamburgerIcon} accessibilityLabel='Menu Drawer' accessibilityRole='menu' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hamburgerIcon: {
    color: def_Page.setDarkMode
         ? darkMode.hamburgerIcon
         : lightMode.hamburgerIcon,
    marginHorizontal: 20
  }
  
});

export default CustomHeaderRight;
