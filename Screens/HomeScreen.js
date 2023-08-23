import React, {useRef, useState, useContext} from 'react';
import { View, Text, Image, AccessibilityInfo, 
  TouchableOpacity, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors, heading } from '../constant';
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
//-----------------------------------------------------------------

function HomeScreen(){


  //Theme Manangement-----------------------------------------------
  const theme = useContext(themeContext)
  //----------------------------------------------------------------
  

  // First Element Set Focus for Screen Reader
   //---------------------------------------------------------------
  const firstElementRef = useRef(null);
  //----------------------------------------------------------------

  const handleButtonClick = () => {
    console.log('Hello world!');
  };

  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect(() => {
    

    // Add a time delay before executing the focus logic, 
    //This is important so the it gives it a chance to find the firstElement during loading.
    const delay = 250; // Delay in milliseconds

    setTimeout(() => {
      if (firstElementRef.current) {
        const reactTag = firstElementRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        console.log('Focus set on Home Screen'); //Debuging purposes
      }
    }, delay);
  });

  return (
    <View style={[styles.container, {backgroundColor: theme.contentBackground}]}>

      
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


      {/* //This is a icon from fontAwesome displayed */}
      <View style={styles.iconContainer}> 
        <FontAwesome name="universal-access" color="red" style={{fontSize: 30}}/> 
      </View>
     {/* //---------------------------------------------------------------- */}



      <heading.Heading1 
        style={{color: theme.textColor}}>
          Testing
      </heading.Heading1>

      <View>
        <Image 
          source={dog_with_glasses}
          style={{ width: 200, height: 200}}
          resizeMode="contain"
          accessibilityLabel='A Labrador Retriever wearing sun glasses'

        />
      </View>
      <TouchableOpacity onPress={handleButtonClick}>
        <Text style={{color: theme.textColor}}>Set Focus</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader:{
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
  contentColor:{
  },
  
});

export default HomeScreen;
