import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { View, Text, Image, AccessibilityInfo, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors, def_Page, heading } from '../constant';

import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import responsive dimensions
import imageSource from '../assets/images/mudkip.png';
import { darkMode, lightMode } from '../Themes/defaultThemes';

function AltText() {

  // State to store the screen dimensions
  // const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('window'));

  // Register an event listener to handle dimension changes
  // useEffect(() => {
  //   const updateScreenDimensions = () => {
  //     setScreenDimensions(Dimensions.get('window'));
  //   };

  //   // Add the event listener
  //   Dimensions.addEventListener('change', updateScreenDimensions);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     Dimensions.removeEventListener('change', updateScreenDimensions);
  //   };
  // }, []);


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
        console.log('Focus set on Alt Screen'); //Debuging purposes
      }
    }, delay);
  });

  const handleButtonClick = () => {
    console.log('Hello world!');
  };


  return (
    <View style={styles.container}>

      {/* // heading.Heading is a custom heading style set in constant.js */}
      {/* //first Element set here -------------------------------------------*/}

      <View style={styles.containerHeader}>
        <heading.Heading1
          ref={firstElementRef}
          style={styles.containerHeaderText}
          accessible={true}
          accessibilityLabel="Text Alternatives"
          accessibilityRole="header"
          accessibilityState={{ selected: true }}
        >

          Text Alternatives
        </heading.Heading1>
      </View>

      {/* // -----------------------------------------------------------------*/}

      <View style={[styles.altTextInfoContainer, styles.borderBottom]}>

        <heading.Heading2
          style={[styles.textContent, styles.contentColor]}
          accessible={true}
          accessibilityLabel="Importance of Alternative Text"
          accessibilityRole="header"
          accessibilityState={{ selected: true }}
        >

          Importance of Alternative Text
        </heading.Heading2>

        <FontAwesome 
          name="info-circle" 
          style={[styles.altTextInfoIcon, , styles.contentColor]}
          importantForAccessibility='no' 
        />

        <Text
          style={[styles.contentColor, styles.textContent]}
        >
          Text alternatives are crucial for ensuring
          digital accessibility. They provide a way for
          people with disabilities, especially those who
          rely on assistive technologies such as screen
          readers, to understand and interact with non-text
          content, such as images, videos, graphs, charts,
          and more.
        </Text>

      </View>

      <View style={styles.imageSectionContainer}>
        <Text 
          style={[styles.contentColor, styles.textContent]}
        >
          Displayed under this text is a image.
        </Text>
        
        <Image 
          source={imageSource}
          style={styles.imageStyle}
          accessibilityLabel='mudkip'
        />

        <Text 
          style={[styles.contentColor, styles.textContent]}
        >

        Since its a image we should only expect name, role"

        The image has a accessibilityLabel set to "mudkip", and a role of image,
        the screen reader will make an annoucement as "mudkip, image"!
        </Text>
      </View>









    </View>
  );
}

const styles = StyleSheet.create({

  //This affects the entire page
  container: {
    flex: 1,
    backgroundColor: def_Page.setDarkMode
    ? darkMode.contentBackground
    : lightMode.contentBackground,
  },
  //----------------------------
  

  //Header Styles relating to "Importance of Text Alternatives"
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
  },
  containerHeaderText: {
    color: "white",
  },
  //----------------------------



//Alt Text Info section specifc styles
  altTextInfoContainer: {
    borderBottomWidth: 5,
    alignItems: 'center',
  },

  altTextInfoIcon: {
    fontSize: 40,
    paddingTop: 10,
  },
  //----------------------------

  //Image section Styles

  imageSectionContainer:{
    alignItems: 'center', //Aligns content horizontally center
  },

  imageStyle: {
    width: 200, 
    height: 200,
    resizeMode: 'contain',
  },

  //----------------------------

  //General Styles--- 
  contentColor:{                  //This style is to switch color between dark and light modes
    color: def_Page.setDarkMode
    ? darkMode.textColor
    : lightMode.textColor,
  },

  borderBottom: {                     //This style switches border color between dark and light modes
    borderColor: def_Page.setDarkMode
    ? darkMode.borderColor
    : lightMode.borderColor,
  },

  textContent: {        //This style is general text style
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  //----------------------------

});

export default AltText;
