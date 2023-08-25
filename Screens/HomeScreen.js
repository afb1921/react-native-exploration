import React, { useRef, useState, useContext, useEffect, useCallback, forwardRef } from 'react';
import {
  View, Text, Image, AccessibilityInfo,
  TouchableOpacity, StyleSheet, Modal, Button, AccessibilityActionInfo
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors, heading } from '../constant';
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
import CustomDropdown from '../components/CustomDropdown';
//-----------------------------------------------------------------

function HomeScreen() {

  useEffect(() => {
    console.log("use effect home screen")
  });

  const dropdownRef = useRef(null)

  //Theme Manangement-----------------------------------------------
  const theme = useContext(themeContext)
  //----------------------------------------------------------------


  // First Element Set Focus for Screen Reader
  //---------------------------------------------------------------
  const firstElementRef = useRef(null);
  //----------------------------------------------------------------

  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect(() => {

    console.log("Focus Effect Home")


    // Add a time delay before executing the focus logic, 
    //This is important so the it gives it a chance to find the firstElement during loading.
    const delay = 250; // Delay in milliseconds

    setTimeout(() => {
      if (firstElementRef.current) {
        const reactTag = firstElementRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        console.log('Focus set on Home Screen\n'); //Debuging purposes

      }
    }, delay);
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.contentBackground }]}>


      {/* //first Element set here -------------------------------------------*/}
      {/* // heading.Heading is a custom heading style set in constant.js */}

      <View style={styles.containerHeader}>
        <heading.Heading1
          ref={firstElementRef} //First Element For Focus set here!
          style={styles.containerHeaderText}
          accessible={true}
          accessibilityLabel="Home Screen"
          accessibilityRole="header"
        >
          Home Screen
        </heading.Heading1>
      </View>
      {/* // -----------------------------------------------------------------*/}

      <View style={styles.container}>
        <CustomDropdown
          options={["Option 1", "Option 2", "Option 3"]} 
          ref={dropdownRef}

        />

      </View>








    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
  },
  containerHeaderText: {
    color: "white",
  },
  iconContainer: {
    alignItems: 'center',
  },
  contentColor: {
  },

});

export default HomeScreen;
