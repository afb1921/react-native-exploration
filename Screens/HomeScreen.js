import React, {useRef} from 'react';
import { View, Text, Image, AccessibilityInfo, TouchableOpacity, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors, def_Page, heading } from '../constant';
import { FontAwesome } from '@expo/vector-icons';
import imageSource from '../assets/images/mudkip.png';
import {darkMode, lightMode} from '../Themes/defaultThemes';

function HomeScreen() {

  // First Element Set Focus for Screen Reader
   //----------------------------------------------------------------
  const firstElementRef = useRef(null);

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
        <FontAwesome name="universal-access" color="red" style={{fontSize: 30}}/> 
      </View>
     {/* //---------------------------------------------------------------- */}



      <heading.Heading1 
        style={styles.contentColor}>
          Testing
      </heading.Heading1>

      <View>
        <Image 
          source={imageSource}
          style={{ width: 200, height: 200}}
          resizeMode="contain"
          accessibilityLabel='mudkip'
        />
      </View>
      <TouchableOpacity onPress={handleButtonClick}>
        <Text style={styles.contentColor}>Set Focus</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={toggleDarkMode}>
      <Text style={styles.contentColor}>
        {darkMode ? 'Turn Off Dark Mode' : 'Turn On Dark Mode'}
      </Text>
    </TouchableOpacity> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: def_Page.setDarkMode
    ? darkMode.contentBackground
    : lightMode.contentBackground,
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
    color: def_Page.setDarkMode
    ? darkMode.textColor
    : lightMode.textColor,
  },
  
  
  

});

export default HomeScreen;
