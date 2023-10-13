// ExampleComponents.js
import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, AccessibilityInfo, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Custom Imports
//============================================================================
import { heading, colors } from '../../constant'
//============================================================================

//Asset Imports
//================================================================
import dog_with_glasses from '../../assets/images/dog_With_Glasses.jpg';
//================================================================


//Theme Management Import
//================================================
import themeContext from '../../Themes/themeContext';
//================================================


function ImageExample() {

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

      console.log("use Focus Effect Example Components")

      //Reset Scroll View to the top of the page
      if (scrollViewRef.current) {
        console.log("Scroll")
        scrollViewRef.current.scrollTo({ y: 0 });
      }

      // // Add a time delay before executing the focus logic, 
      // //This is important so the it gives it a chance to find the firstElement during loading.
      const delay = 250; // Delay in milliseconds

      setTimeout(() => {

        if (firstElementRef.current) {
          const reactTag = firstElementRef.current._nativeTag;
          AccessibilityInfo.setAccessibilityFocus(reactTag);
          console.log('First Element===========n\n'); //Debuging purposes

        }
      }, delay)
    }, [])

  )

  return (

    <ScrollView
      ref={scrollViewRef}
      keyboardDismissMode='on-drag' 
      pagingEnabled="false" 
      style={[styles.container, { backgroundColor: theme.page.contentBackground }]}
    >

      <View>
        {/* // heading.Heading is a custom heading style set in constant.js */}
        {/* //first Element set here -------------------------------------------*/}

        <View style={styles.containerHeader}>
          <heading.Heading1 //Heading 1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Image Example"
          >
            Image Example
          </heading.Heading1>
        </View>

        <View style={styles.imageSectionContainer}>
          <Image
            source={dog_with_glasses}
            style={styles.imageStyle}
            accessibilityLabel='A Labrador Retriever wearing sun glasses'
            accessible={true}
            accessibilityRole='image'
          />
        </View>
      </View>

    </ScrollView>



  );
}

const styles = StyleSheet.create({
  //Header Styles relating to "Example Components"
  //================================================
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
  },
  containerHeaderText: {
    color: "white",
  },
  //================================================

  //General Styles
  //================================================ 
  textContent: {        //This style is general text style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  heading2: {        //Heading 2 style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  heading3: {        //Heading 3 style
    paddingTop: 1,
    paddingBottom: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //================================================

  //Image section Styles
  //================================================
  imageSectionContainer: {
    alignItems: 'center', //Aligns content horizontally center
  },

  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
  },

  //================================================

});

export default ImageExample;
