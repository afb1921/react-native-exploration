import React, { useRef, useContext, } from 'react';
import { View, ScrollView, StyleSheet, AccessibilityInfo} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Custom Imports
//============================================================================
import { heading, colors } from '../../constant'
import HorizontalLine from '../../components/basic_components/HorizontalLine';
import OrderedList from '../../components/basic_components/OrderedList';
import UnorderedList from '../../components/basic_components/UnorderedList';
//============================================================================

//Theme Management Import
//================================================
import themeContext from '../../Themes/themeContext';
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
