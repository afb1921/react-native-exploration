import React, { useRef, useContext, useState } from 'react';
import { View, Text, Image, AccessibilityInfo, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Asset Imports
//============================================================================
import { colors, heading } from '../constant';
import {resetScroll, accessibilityFocus} from '../functions/accessibility_functions'
import { FontAwesome } from '@expo/vector-icons';
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
import ocean_video from '../assets/videos/oceanvideo.mp4';
//============================================================================

//Custom Imports
//============================================================================
import VideoPlayer from '../components/Videoplayer'
import HorizontalLine from '../components/HorizontalLine';
//============================================================================

//Theme Managment Imports
//============================================================================
import themeContext from '../Themes/themeContext';
//============================================================================

function AltText({appLabelRef}) {
  // First Element Set Focus for Screen Reader & Reset Scroll View
  //===============================================================
  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);


   //During scrolling this will set the focus to the top menu header of the app.
  //===============================================================
  const handleScroll = (scrollView) => {
    if (!isScrolling) {
      setIsScrolling(true);
      console.log('Scroll')

      if (appLabelRef.current) {
        const reactTag = appLabelRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }

      setTimeout(() => {
        setIsScrolling(false);
        AccessibilityInfo.announceForAccessibility("Page was scrolled, focus set to menu header")

      }, 2000); // Adjust the delay time (in milliseconds) as needed
    }
  };
  //=================================================================

  //Theme Manangement
  //===============================================================
  const { theme} = useContext(themeContext);
  //===============================================================

  //When the page loads (everytime) the useFocusEffect is triggered
  useFocusEffect(
    React.useCallback(() => {
      resetScroll(scrollViewRef);
      accessibilityFocus(firstElementRef, 250);
    }, [])
  ) 

  //---------------------------------------------------------------

  return (

    <ScrollView onScroll={handleScroll} ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>

      <View>

        {/* // heading.Heading is a custom heading style set in constant.js */}
        {/* //first Element set here -------------------------------------------*/}

        <View style={styles.containerHeader}>
          <heading.Heading1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Text Alternatives"
          >
            Text Alternatives
          </heading.Heading1>
        </View>

        {/* // -----------------------------------------------------------------*/}

        <View style={[styles.altTextInfoContainer]}>

          <heading.Heading2
            style={[styles.headingContent, { color: theme.page.text }]}
            accessibilityLabel="Importance of Alternative Text"
          >
            Importance of Alternative Text
          </heading.Heading2>

          <FontAwesome
            name="info-circle"
            style={[styles.altTextInfoIcon, , { color: theme.page.text }]}
            importantForAccessibility='no'
            accessible={false}
          />

          <Text style={[styles.textContent, { color: theme.page.text }]}>
            Text alternatives are crucial for ensuring
            digital accessibility. They provide a way for
            people with disabilities, especially those who
            rely on assistive technologies such as screen
            readers, to understand and interact with non-text
            content, such as images, videos, graphs, charts,
            and more.
          </Text>
        </View>

        <HorizontalLine style={{backgroundColor: theme.horizontalLine.color}}/>

        <View style={styles.imageSectionContainer}>
          <heading.Heading2
            style={[styles.headingContent, { color: theme.page.text }]}
            accessibilityLabel="Example Image"
          >
            Example Image
          </heading.Heading2>

          <Image
            source={dog_with_glasses}
            style={styles.imageStyle}
            accessibilityLabel='A Labrador Retriever wearing sun glasses'
            accessible={true}
            accessibilityRole='image'

          />

          <Text style={[styles.textContent, { color: theme.page.text }]}>

            <Text>
              The image has an accessibilityLabel set to{"\n"}
            </Text>
            <Text style={{ fontStyle: 'italic' }}>
              {"\"A Labrador Retriever wearing sun glasses\""}{"\n"}
            </Text>
            <Text>
              and a role of image, therefore the screen reader will make an announcement as{"\n"}
            </Text>
            <Text style={{ color: theme.page.textHighlight }} accessible={true}>
              {"\"A Labrador Retriever wearing sun glasses, image\""}{"\n"}
            </Text>

          </Text>
          </View>

          <View>
            <heading.Heading2
              style={[styles.headingContent, { color: theme.page.text }]}
              accessibilityLabel="Example Video"
            >
              Example Video
          </heading.Heading2>
            <VideoPlayer video={ocean_video} videoName="ocean" />
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
  altTextInfoContainer: {
    alignItems: 'center',
  },

  altTextInfoIcon: {
    fontSize: 40,
  },
  //----------------------------

  //Image section Styles

  imageSectionContainer: {
    alignItems: 'center', //Aligns content horizontally center
  },

  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
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

export default AltText;
