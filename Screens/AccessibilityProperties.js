// AccessibilityProperties.js
import React, { useRef, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, AccessibilityInfo } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Asset Imports
//============================================================================
import { colors, heading } from '../constant';
import { FontAwesome } from '@expo/vector-icons';
//============================================================================

import HorizontalLine from '../components/HorizontalLine';

import themeContext from '../Themes/themeContext';


function AccessibilityProperties() {

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

    <ScrollView ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>

      <View>

        <View>

          {/* // heading.Heading is a custom heading style set in constant.js */}
          {/* //first Element set here -------------------------------------------*/}

          <View style={styles.containerHeader}>
            <heading.Heading1
              ref={firstElementRef}
              style={styles.containerHeaderText}
              accessibilityLabel="Accessibility Properties"
            >
              Accessibility Properties
            </heading.Heading1>
          </View>

          {/* // -----------------------------------------------------------------*/}

          <View style={[styles.infoContainer]}>

            <heading.Heading2
              style={[styles.headingContent, { color: theme.page.text }]}
              accessibilityLabel="Important Information"
            >
              Important Information
            </heading.Heading2>

            <FontAwesome
              name="info-circle"
              style={[styles.infoIcon, , { color: theme.page.text }]}
              importantForAccessibility='no'
              accessible={false}
            />

            <Text style={[styles.textContent, { color: theme.page.text }]}>
            Android and iOS offer APIs that allow apps to work seamlessly with assistive technologies such as VoiceOver on iOS and TalkBack on Android.
            </Text>
            <Text style={[styles.textContent, { color: theme.page.text }]}>
            Please note that Android and iOS have some differences in their approaches, which can lead to variations in React Native implementations based on the platform.
            </Text>
          </View>
        </View>

        <HorizontalLine/>

        <View style={styles.imageSectionContainer}>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="accessible: property example"
          >
            accessible
          </heading.Heading2>
          
          <View accessible={true}>
            <Text>Hello</Text>
            <Text>World</Text>
          </View>

          <View></View>
        </View>

        













      </View>

    </ScrollView>



  );
}

const styles = StyleSheet.create({

  //This affects the entire page
  container: {
    flex: 1,
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
  infoContainer: {
    alignItems: 'center',
  },

  infoIcon: {
    fontSize: 40,
  },
  //----------------------------

    //General Styles--- 

    textContent: {        //This style is general text style
      paddingTop: 10,
      paddingBottom: 5,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    headingContent: {        //This style is general heading style
      paddingTop: 10,
      paddingBottom: 5,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    //----------------------------


});

export default AccessibilityProperties;
