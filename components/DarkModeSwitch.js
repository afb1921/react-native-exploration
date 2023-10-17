import React, { useContext} from 'react';
import { View, Text, Switch} from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import {colors} from '../constant';

//Theme Import
//================================================================
import themeContext from '../Themes/themeContext';
//================================================================


const DarkModeSwitch = (({onToggle}) => {

    //Theme Management
    //================================
    const { theme, toggleButtonRef, setTheme, themeState } = useContext(themeContext);
    //===============================

    const handleToggle = (value) => { //When switch is clicked (it will change the theme)
      console.log(themeState)
      setTheme(!themeState); // Toggle the dark mode state
      EventRegister.emit('ChangeTheme', !themeState); // Emit the updated state
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
         thumbColor={themeState ? 'orange' : colors.darkBlue}
         trackColor={{ false: colors.lightGreen, true: colors.lightGreen }} // Specify colors for off and on states
          value={themeState}
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
  