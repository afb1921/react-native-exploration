import React, { useRef, useContext } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Custom Imports
//============================================================================
import { colors } from '../../constant'
import { resetScroll, accessibilityFocus } from '../../functions/accessibility_functions'
import { heading } from '../../components/headings';
import NextPageButton from '../../components/NextPageButton';
import PreviousPageButton from '../../components/PreviousPageButton';
import HorizontalLine from '../../components/basic_components/HorizontalLine';
//============================================================================

//Asset Imports
//================================================================
import dog_with_glasses from '../../assets/images/dog_With_Glasses.jpg';
//================================================================


//Theme Management Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================


function ImageExample() {

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  //When the page loads (everytime) the useFocusEffect is triggered
  useFocusEffect(
    React.useCallback(() => {
      resetScroll(scrollViewRef);
      accessibilityFocus(firstElementRef, 250);
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

        <HorizontalLine />

        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <PreviousPageButton PageName="Lists" />
          <NextPageButton PageName="VideoPlayer" />
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
