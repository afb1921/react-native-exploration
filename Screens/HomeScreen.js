import React, { useEffect, useRef, useState } from 'react';
import { View, Text, AccessibilityInfo, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors, def_Page, heading } from '../constant';
import { FontAwesome } from '@expo/vector-icons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import responsive dimensions


function HomeScreen() {

   // State to store the screen dimensions
   const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

   // Register an event listener to handle dimension changes
   useEffect(() => {
     const updateScreenDimensions = () => {
       setScreenDimensions(Dimensions.get('window'));
     };
     
     // Add the event listener
     Dimensions.addEventListener('change', updateScreenDimensions);
 
     // Clean up the event listener when the component unmounts
     return () => {
       Dimensions.removeEventListener('change', updateScreenDimensions);
     };
   }, []);

  
   // First Element Set Focus for Screen Reader
   //----------------------------------------------------------------
  const firstElementRef = useRef(null);

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

  const handleButtonClick = () => {
    console.log('Hello world!');
  };

  return (
    <View style={styles.container}>

      
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
        <FontAwesome name="universal-access" size={wp('10%')} color="red" /> 
      </View>
     {/* //---------------------------------------------------------------- */}



      <heading.Heading1>Testing</heading.Heading1>

      <TouchableOpacity onPress={handleButtonClick}>
        <Text>Set Focus</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    marginTop: hp('3%'),
  },
  

});

export default HomeScreen;
