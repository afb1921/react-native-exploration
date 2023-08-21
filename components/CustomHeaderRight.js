import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { def_Page } from '../constant';
import { darkMode, lightMode } from '../Themes/defaultThemes';

//Theme Imports---------------------------------------------------
import themeContext from '../Themes/themeContext';
//----------------------------------------------------------------


const CustomHeaderRight = ({ navigation }) => {

  //Theme Manangement-----------------------------------------------
  const theme = useContext(themeContext)
  //----------------------------------------------------------------

  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Icon name="bars" size={30} style={[styles.hamburgerIcon, {color: theme.hamburgerIcon}]} accessibilityLabel='Menu Drawer' accessibilityRole='menu' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hamburgerIcon: {
    marginHorizontal: 20
  }
  
});

export default CustomHeaderRight;
