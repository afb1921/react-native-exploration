import React, { useRef, useContext, } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Custom Imports
//============================================================================
import { colors } from '../../constant'
import { resetScroll, accessibilityFocus } from '../../functions/accessibility_functions'
import HorizontalLine from '../../components/basic_components/HorizontalLine';
import OrderedList from '../../components/basic_components/OrderedList';
import UnorderedList from '../../components/basic_components/UnorderedList';
import { heading } from '../../components/headings';
import NextPageButton from '../../components/NextPageButton';
import PreviousPageButton from '../../components/PreviousPageButton';
//============================================================================

//Theme Management Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================

//Ordered List Data
//================================================================
const orderedListData = [
  { label: 'Item 1', subItems: [] },
  {
    label: 'Item 2', subItems: [
      { label: 'Sub-Item 2.1', subItems: [] },
      {
        label: 'Sub-Item 2.2', subItems: [
          { label: 'Sub-Sub-Item 2.2.1', subItems: [] },
          { label: 'Sub-Sub-Item 2.2.2', subItems: [] },
        ]
      },
    ]
  },
  { label: 'Item 3', subItems: [] },
];
//================================================================


//Unordered List Data
//================================================================
const data = [
  'Apple',
  'Orange',
  'Banana',
  'Grapefruit',
];
//================================================================


function ListExamples() {

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
            accessibilityLabel="List Examples"
          >
            List Examples
          </heading.Heading1>
        </View>

        <View>
          <View>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Unordered List Example"
            >
              Unordered List
            </heading.Heading3>
            <UnorderedList data={data} />
          </View>

          <View>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Ordered List Example"
            >
              Ordered List Example
            </heading.Heading3>
            <OrderedList data={orderedListData} />
          </View>
        </View>

        <HorizontalLine />

        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <PreviousPageButton PageName="ComboBox" />
          <NextPageButton PageName="Image" />
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

export default ListExamples;
