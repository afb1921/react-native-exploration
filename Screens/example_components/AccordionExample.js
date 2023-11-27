import React, { useRef, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Custom Imports
//============================================================================
import { colors } from '../../constant'
import { resetScroll, accessibilityFocus } from '../../functions/accessibility_functions'
import HorizontalLine from '../../components/basic_components/HorizontalLine';
import Accordion from '../../components/basic_components/Accordion';
import { heading } from '../../components/headings';
import NextPageButton from '../../components/NextPageButton';
import PreviousPageButton from '../../components/PreviousPageButton';
//============================================================================

//Theme Management Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================

function AccordionExample() {

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
            accessibilityLabel="Accordion Example"
          >
            Accordion Example
          </heading.Heading1>
        </View>

        <View>
          <Accordion
            title="Test Accordion"
            collapsedData={
              <View>
                <Text style={{ color: theme.page.text }}>This is the collapsed data</Text>
              </View>
            }
          />
        </View>
        <HorizontalLine />
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <PreviousPageButton PageName="Tables" />
          <NextPageButton PageName="CheckBox" />
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

});

export default AccordionExample;
