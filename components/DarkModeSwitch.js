import React, { useContext, useState} from 'react';
import { View, Text, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import {colors} from '../constant';

//Theme Imports
//================================================================
import themeContext from '../Themes/themeContext';
//================================================================


const DarkModeSwitch = (({ darkModeTheme, setDarkMode, onToggle}) => {

    //Theme Management
    //================================
    const { theme, toggleButtonRef } = useContext(themeContext);
    //===============================

    const handleToggle = (value) => { //When switch is clicked (it will change the theme)
      setDarkMode(value);
      EventRegister.emit('ChangeTheme', value);
      onToggle();
    };
  
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        <Text
          style={{ color: theme.page.text }}
          accessible={false}
          importantForAccessibility='no'
        >
          Dark Mode
        </Text>

        {/* The dark mode switch */}
        {/* ============================= */}
        <Switch
         thumbColor={darkModeTheme ? 'orange' : colors.darkBlue}
         trackColor={{ false: colors.lightGreen, true: colors.lightGreen }} // Specify colors for off and on states
          value={darkModeTheme}
          ref={toggleButtonRef}
          accessibilityLabel='Dark Mode'
          accessibilityRole='switch'
          onValueChange={(value) => {
            handleToggle(value);
          }}
        />
        {/* =========================== */}


      </View>
    );
  });
  
  export default DarkModeSwitch;
  