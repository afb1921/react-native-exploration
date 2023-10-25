import React, { useRef, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, AccessibilityInfo } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CodeHighlighter from "react-native-code-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

//Asset Imports
//============================================================================
import { colors } from '../../../constant';
import { FontAwesome } from '@expo/vector-icons';
import { resetScroll, accessibilityFocus } from '../../../functions/accessibility_functions'
//============================================================================

//Component Imports
//============================================================================
import { heading } from '../../../components/headings';
import HorizontalLine from '../../../components/basic_components/HorizontalLine';
import TwoVariableTable from '../../../components/basic_components/TwoVariableTable';
import Accordion from '../../../components/basic_components/Accordion';
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

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  const CODE_STR =
    `<View style={[styles.exampleContainer]}>
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
</View>`

  const handlePress = () => {
    AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => {
      if (isEnabled) {
        const delay = 250
        setTimeout(() => {
          AccessibilityInfo.announceForAccessibility("You have tapped Button A!")
        }, delay);

      } else {
        Alert.alert("Button A Tapped")
      }
    });
  }

  //When the page loads (everytime) the useFocusEffect is triggered
  useFocusEffect(
    React.useCallback(() => {
      resetScroll(scrollViewRef);
      accessibilityFocus(firstElementRef, 250);
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
              style={{ backgroundColor: theme.button.color, padding: 5, borderRadius: 5, marginBottom: 5 }}
              accessibilityLabel="Button A"
              accessibilityHint="This is button A"
              onPress={handlePress}
            >
              <Text style={{ color: theme.button.text }}>Button A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: theme.button.color, padding: 5, borderRadius: 5, marginBottom: 5 }}
              accessible={true}
              accessibilityLabel="Button B"
              accessibilityHint="This is button B"
              accessibilityElementsHidden={true}
              onPress={() => alert("Button B pressed")}
            >
              <Text style={{ color: theme.button.text }}>Button B</Text>
            </TouchableOpacity>
            <Text style={{ color: theme.page.text }}>Button B was completely skipped due to having accessibility elements hidden set to True</Text>
          </View>

          <HorizontalLine />

          <View>
            <Accordion
              title="Code Example:"
              collapsedData={
                <CodeHighlighter
                  hljsStyle={atomOneDarkReasonable}
                  textStyle={styles.text}
                  language="javascript"
                  containerStyle={styles.codeContainer}
                >
                  {CODE_STR}
                </CodeHighlighter>
              }
            />
          </View>
        </View>

        <HorizontalLine />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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

  //Header Styles
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

  //Info section specifc styles
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
  },
  codeContainer: {
    padding: 16,
    minWidth: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccessibilityElementsHiddenProp;
