import React, { useRef, useContext, useEffect, useState} from 'react';
import {View, Text, Image, AccessibilityInfo, StyleSheet} from 'react-native';
import { useFocusEffect, useRoute} from '@react-navigation/native';
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

  //Theme Manangement-----------------------------------------------
 
  const { theme} = useContext(themeContext);

  const dropdownRef = useRef(null)

  //----------------------------------------------------------------


  // Focus Managment 
  //---------------------------------------------------------------
  const firstElementRef = useRef(null);
  //----------------------------------------------------------------

  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect( 
    React.useCallback(() => {

    console.log("use Focus Effect Home")
 
    // // Add a time delay before executing the focus logic, 
    // //This is important so the it gives it a chance to find the firstElement during loading.
    const delay = 250; // Delay in milliseconds

     setTimeout(() => {
            
      if (firstElementRef.current) {
        const reactTag = firstElementRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        console.log('First Element===========n\n'); //Debuging purposes

      }
    },delay)
    },[])

  )
  

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
          dropDownTitle="This is a Test Title!"
          options={["O", "Y", "X"]} 
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
