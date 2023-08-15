import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../constant';


const CustomHeaderRight = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Icon name="bars" size={30} color={colors.hamburgerIcon} style={{marginHorizontal: 20 }} accessibilityLabel='Menu Drawer' accessibilityRole='menu' />
    </TouchableOpacity>
  );
};

export default CustomHeaderRight;
