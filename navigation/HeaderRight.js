import React, {useContext} from 'react';
import { TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';
import { DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Theme Import
//================================================================
import themeContext from '../themes/themeContext';
//================================================================

const HeaderRight = ({navigation}) => {

  //Theme Manangement
  //================================================================
  const { theme} = useContext(themeContext);
  //================================================================

  const handleMenuPress = () => { //When the menu hamburger icon is clicked

    navigation.dispatch(DrawerActions.openDrawer()); //opens the drawer
    const delay = 200
    setTimeout(() => {
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
        style={[styles.hamburgerIcon, {color: theme.app_Header.hamburgerIcon}]} 
        accessibilityLabel='Menu Drawer' 
        accessibilityRole='button' 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hamburgerIcon: {
    marginHorizontal: 20
  }
  
});

export default HeaderRight;
