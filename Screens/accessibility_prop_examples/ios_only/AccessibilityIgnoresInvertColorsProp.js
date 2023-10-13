// ScreenTemplate.js
import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, AccessibilityInfo } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import themeContext from '../Themes/themeContext';


function AccessibilityIgnoresInvertColorsProp() {

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  // First Element Set Focus for Screen Reader & Reset Scroll View
  //===============================================================
  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);
  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect(
    React.useCallback(() => {
      console.log("use Focus Effect")
      //Reset Scroll View to the top of the page
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0 });
      }
      // // Add a time delay before executing the focus logic, 
      // //This is important so the it gives it a chance to find the firstElement during loading.
      const delay = 250; // Delay in milliseconds
      setTimeout(() => {
        if (firstElementRef.current) {
          const reactTag = firstElementRef.current._nativeTag;
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          console.log('First Element\n'); //Debuging purposes
        }
      }, delay)
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

export default AccessibilityIgnoresInvertColorsProp;
