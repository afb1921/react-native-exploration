// ScreenTemplate.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {resetScroll, accessibilityFocus} from '../functions/accessibility_functions'

//Theme Import
//================================================
import themeContext from '../Themes/themeContext';
//================================================

function ScreenReaderEnabledCheck() {

  //Theme Manangement
  //===============================================================
  const { theme } = React.useContext(themeContext);
  //===============================================================

  const firstElementRef = React.useRef(null);
  const scrollViewRef = React.useRef(null);

  //When the page loads (everytime) the useFocusEffect is triggered
  useFocusEffect(
    React.useCallback(() => {
      resetScroll(scrollViewRef);
      accessibilityFocus(firstElementRef, 250);
    }, [])
  )

  return (
    <ScrollView ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>
      <View>
        <Text ref={firstElementRef}>Welcome to the Page Template Screen!</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
});

export default ScreenReaderEnabledCheck;
