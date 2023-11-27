import React, { useRef, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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
import NextPageButton from '../../../components/NextPageButton';
import PreviousPageButton from '../../../components/PreviousPageButton';
//============================================================================

//Theme Import
//============================================================================
import themeContext from '../../../themes/themeContext';
//============================================================================


//Table
//============================================================================
const TwoVarData = {
  columns: ['Pass/Fail'],
  rows: [
    { label: 'IOS-VoiceOver', values: ["FAIL"] },
    { label: 'Android-TalkBack', values: ['PASS'] },
  ],
};
//================================================================


function ImportantForAccessibility() {

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);
  const CODE_STR =
    `<View style={styles.container}>
    <View
      style={{ backgroundColor: colors.brightBlue, marginBottom: 10 }}
      importantForAccessibility="yes">
      <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 5 }}>First layout</Text>
    </View>
    <View
      style={[styles.layout, { backgroundColor: 'red', marginBottom: 10 }]}
      importantForAccessibility="no-hide-descendants">
      <Text style={{ fontWeight: 'bold', padding: 5 }}>Second layout</Text>
    </View>
  </View>`

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
            accessibilityLabel="Important For Accessibility"
          >
            Important For Accessibility
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
            When two UI components with the same parent overlap, default accessibility focus may behave unpredictably. The "importantForAccessibility" property can resolve this issue by determining whether a view triggers accessibility events and is reported to accessibility services. This property offers options such as "auto," "yes," "no," and "no-hide-descendants," where the last option makes accessibility services ignore both the component and its children.
          </Text>
          <Text style={[styles.textContent, { color: theme.page.text, marginTop: 10 }]}>
              Please note this is for Android-TalkBack only.
            </Text>
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text, textAlign: 'center' }]}
            accessibilityLabel="Example:"
          >
            Example:
          </heading.Heading2>

          <View style={[styles.exampleContainer]}>
            <View style={styles.container}>
              <View
                style={{ backgroundColor: colors.brightBlue, marginBottom: 10 }}
                importantForAccessibility="yes">
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', padding: 5 }}>First layout</Text>
              </View>
              <View
                style={[styles.layout, { backgroundColor: 'red', marginBottom: 10 }]}
                importantForAccessibility="no-hide-descendants">
                <Text style={{ fontWeight: 'bold', padding: 5 }}>Second layout</Text>
              </View>
            </View>
            <Text style={{ color: theme.page.text }}>
              In the above example, only the first layout is announced by TalkBack.
              The second layout is completely invisible to TalkBack due to having important for accessibility set to "no-hide-descendants".
            </Text>
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

        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
          <TwoVariableTable title="Pass/Fail Information" data={TwoVarData} cellTextStyle={{ fontWeight: 'bold', fontSize: 18 }} titleStyle={{ textAlign: 'center' }} />
        </ScrollView>

        <HorizontalLine/>

        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <PreviousPageButton PageName="LiveRegion" />
          <NextPageButton PageName="ElementsHidden" />
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
})

export default ImportantForAccessibility;
