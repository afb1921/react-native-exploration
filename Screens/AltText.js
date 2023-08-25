import React, { useRef, useContext, useState, useEffect } from 'react';
import { View, Text, Image, AccessibilityInfo, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors, def_Page, heading } from '../constant';

import { FontAwesome } from '@expo/vector-icons';
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';

import CustomDropdown from '../components/CustomDropdown';

//Theme Managment Imports==========================================
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------


function AltText() {

  //Theme Manangement
  //===============================================================
  const theme = useContext(themeContext)
  //----------------------------------------------------------------

  // First Element Set Focus for Screen Reader & Reset Scroll View
  //===============================================================
  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect(() => {
    console.log("focus effect on alt screen")

      //Reset Scroll View to the top of the page
      if (scrollViewRef.current) {
        console.log("Scroll")
        scrollViewRef.current.scrollTo({ y: 0 });
      }
      //-----------------------------------------------------------

      // Add a time delay before executing the focus logic, 
      //This is important so the it gives it a chance to find the firstElement during loading.
      const delay = 250; // Delay in milliseconds

      setTimeout(() => {
        const reactTag = firstElementRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        console.log('Focus set on Alt Screen');
      }, delay);
      
    }

  );

  //---------------------------------------------------------------





  const handleButtonClick = () => {
    console.log('Hello world!');
  };




  return (

    <ScrollView ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.contentBackground }]}>

      <View>

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

        <View style={[styles.altTextInfoContainer, { borderColor: theme.borderColor }]}>

          <heading.Heading2
            style={[styles.textContent, { color: theme.textColor }]}
            accessible={true}
            accessibilityLabel="Importance of Alternative Text"
            accessibilityRole="header"
            accessibilityState={{ selected: true }}
          >

            Importance of Alternative Text
          </heading.Heading2>

          <FontAwesome
            name="info-circle"
            style={[styles.altTextInfoIcon, , { color: theme.textColor }]}
            importantForAccessibility='no'
          />

          <Text
            style={[styles.textContent, { color: theme.textColor }]}
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

        <View
          style={styles.imageSectionContainer}
        >


          <Text
            style={[styles.textContent, { color: theme.textColor }]}
          >
            Displayed under this text is a image.
          </Text>

          <Image
            source={dog_with_glasses}
            style={styles.imageStyle}
            accessibilityLabel='A Labrador Retriever wearing sun glasses'
          />

          <Text style={[styles.textContent, { color: theme.textColor }]}>

            <Text>
              The image has an accessibilityLabel set to{"\n"}
            </Text>
            <Text style={{ fontStyle: 'italic' }}>
              {"\"A Labrador Retriever wearing sun glasses\""}{"\n"}
            </Text>
            <Text>
              and a role of image, therefore the screen reader will make an announcement as{"\n"}
            </Text>
            <Text style={{ color: theme.textHighlight }} accessible={true}>
              {"\"A Labrador Retriever wearing sun glasses, image\""}{"\n"}
            </Text>

          </Text>

          <CustomDropdown options={["Hello World", "Computer Science", "Python"]}/>

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
    borderBottomWidth: 5,
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
  //----------------------------

});

export default AltText;
