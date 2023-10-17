import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, AccessibilityInfo, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Asset Imports
//============================================================================
import { colors, heading } from '../../../constant';
import { FontAwesome } from '@expo/vector-icons';
//============================================================================

//Component Imports
//============================================================================
import HorizontalLine from '../../../components/basic_components/HorizontalLine';
import CodeBlock from '../../../components/basic_components/CodeBlock';
import TwoVariableTable from '../../../components/basic_components/TwoVariableTable';
//============================================================================

//Theme Import
//============================================================================
import themeContext from '../../../Themes/themeContext';
//============================================================================


//Table
//============================================================================
const TwoVarData = {
  columns: ['Pass/Fail'],
  rows: [
    { label: 'IOS-VoiceOver', values: ["PASS"] },
    { label: 'Android-TalkBack', values: ['FAIL'] },
  ],
};
//================================================================


function AccessibilityElementsHiddenProp() {

  const [value, setValue] = useState(0);

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  // First Element Set Focus for Screen Reader & Reset Scroll View
  //===============================================================
  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  const incrementValue = () => {
    setValue(value + 1);
    console.log(value + 1);


  }

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
          console.log('First Element\n'); //Debuging purposes

        }
      }, delay)
    }, [])

  )

  return (

    <ScrollView ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>
      <View>

        {/* // heading.Heading is a custom heading style set in constant.js */}
        {/* //first Element set here -------------------------------------------*/}

        <View style={styles.containerHeader}>
          <heading.Heading1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Accessibility Elements Hidden Property"
          >
            Accessibility Elements Hidden Property
          </heading.Heading1>
        </View>

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
            A boolean value indicating whether the accessibility elements contained within this accessibility element are hidden.
          </Text>
          <Text style={[styles.textContent, { color: theme.page.text }]}>
            For example, in a window that contains sibling views A and B, setting accessibilityElementsHidden to true on view B causes VoiceOver to ignore the elements in the view B. This is similar to the Android property importantForAccessibility='no-hide-descendants'.
          </Text>
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text, textAlign: 'center' }]}
            accessibilityLabel="iOS Only Example: (This example shows two buttons A and B)"
          >
            iOS Only Example: (This example shows two buttons A and B)
          </heading.Heading2>

          <View style={[styles.exampleContainer]}>

            <TouchableOpacity
              accessible={true}
              style={{backgroundColor: theme.button.color, padding: 5, borderRadius: 5, marginBottom: 5}}
              accessibilityLabel="Button A"
              accessibilityHint="This is button A"
              onPress={() => alert("Button A pressed")}
            >
              <Text style={{color: theme.button.text}}>Button A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor: theme.button.color, padding: 5, borderRadius: 5, marginBottom: 5}}
              accessible={true}
              accessibilityLabel="Button B"
              accessibilityHint="This is button B"
              accessibilityElementsHidden={true}
              onPress={() => alert("Button B pressed")}
            >
              <Text style={{color: theme.button.text}}>Button B</Text>
            </TouchableOpacity>
            <Text style={{color: theme.page.text}}>Button B was completely skipped due to having accessibility elements hidden set to True</Text>

          </View>

          <HorizontalLine />

          <View>
            <heading.Heading2 //Heading 2
              style={[styles.heading2, { color: theme.page.text, textAlign: 'center' }]}
              accessibilityLabel="Code Example:"
            >
              Code Example:
            </heading.Heading2>

            <CodeBlock text="
              <TouchableOpacity
              accessible={true}
              accessibilityLabel='Button A'
              accessibilityHint='This is button A'
              onPress={() => alert('Button A pressed')}
            >
              <Text>Button A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              accessible={true}
              accessibilityLabel='Button B'
              accessibilityHint='This is button B'
              accessibilityElementsHidden={true} 
              onPress={() => alert('Button B pressed')}
            >
              <Text>Button B</Text>
            </TouchableOpacity>"
            />
          </View>
        </View>

        <HorizontalLine />

        <View>
          <TwoVariableTable title="Pass/Fail Information" data={TwoVarData} cellTextStyle={{ fontWeight: 'bold', fontSize: 18 }} titleStyle={{ textAlign: 'center' }} />
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

  exampleContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  //----------------------------

  //General Styles--- 

  textContent: {        //This style is general text style
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  headingContent: {        //This style is general heading style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //----------------------------

  //Alt Text Info section specifc styles
  infoContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  infoIcon: {
    fontSize: 40,
  },
  //----------------------------

  buttonText: {
    padding: 10,
  }
});

export default AccessibilityElementsHiddenProp;
