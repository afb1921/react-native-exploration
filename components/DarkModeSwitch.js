import React, { useContext, useRef, useEffect, useState } from 'react';
import { View, Text, Switch, AccessibilityInfo } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';

import themeContext from '../Themes/themeContext';


const DarkModeSwitch = (({ darkModeTheme, setDarkMode, onToggle}) => {
    // const theme = useContext(themeContext);

    //================================
    const { theme, toggleButtonRef } = useContext(themeContext);
    const [initialDarkMode, setInitialDarkMode] = useState(darkModeTheme);

    //===============================

    useEffect(() => {
      // Set the initial switch state once the theme context is available
      setInitialDarkMode(darkModeTheme);
    }, [darkModeTheme]);

  
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
          value={initialDarkMode}
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
  