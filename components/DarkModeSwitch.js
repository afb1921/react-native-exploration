import React, { useContext, useRef } from 'react';
import { View, Text, Switch, AccessibilityInfo } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';

import themeContext from '../Themes/themeContext';


const DarkModeSwitch = (({ darkModeTheme, setDarkMode, onToggle}) => {
    // const theme = useContext(themeContext);

    //================================
    const { theme, toggleButtonRef } = useContext(themeContext);
    //===============================

  
    const handleToggle = (value) => {
      setDarkMode(value);
      EventRegister.emit('ChangeTheme', value);
      onToggle();
    };
  
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{ color: theme.textColor }}
          accessible={false}
          importantForAccessibility='no'
        >
          Dark Mode
        </Text>
  
        <Switch
          value={darkModeTheme}
          ref={toggleButtonRef}
          accessibilityLabel='Dark Mode Toggle'
          onValueChange={(value) => {
            handleToggle(value);
          }}
        />
      </View>
    );
  });
  
  export default DarkModeSwitch;
  