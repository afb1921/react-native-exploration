import React, { useRef, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, AccessibilityInfo, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CodeHighlighter from "react-native-code-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

//Asset Imports
//============================================================================
import { colors } from '../../constant';
import { FontAwesome } from '@expo/vector-icons';
import { resetScroll, accessibilityFocus } from '../../functions/accessibility_functions'
//============================================================================

//Component Imports
//============================================================================
import { heading } from '../../components/headings';
import HorizontalLine from '../../components/basic_components/HorizontalLine';
import TwoVariableTable from '../../components/basic_components/TwoVariableTable';
import Accordion from '../../components/basic_components/Accordion';
import NextPageButton from '../../components/NextPageButton';
import PreviousPageButton from '../../components/PreviousPageButton';
//============================================================================

//Theme Import
//============================================================================
import themeContext from '../../themes/themeContext';
//============================================================================


//Table
//============================================================================
const TwoVarData = {
  columns: ['Pass/Fail'],
  rows: [
    { label: 'IOS-VoiceOver', values: ["PASS"] },
    { label: 'Android-TalkBack', values: ['PASS'] },
  ],
};
//================================================================


function AccessibilityHintProp() {

  const CODE_STR =
    `<View style={[styles.exampleContainer]}>
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Tap me!"
      onPress={handlePress}
    >
      <View style={{ backgroundColor: theme.button.color, borderRadius: 10 }}>
        <Text style={[styles.buttonText, { color: theme.button.text }]}>Press me!</Text>
      </View>
    </TouchableOpacity>
  </View>`

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

  const handlePress = () => {
    AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => {
      if (isEnabled) {
        const delay = 250
        setTimeout(() => {
          AccessibilityInfo.announceForAccessibility("You have tapped the button!")
        }, delay);

      } else {
        Alert.alert("Button Tapped")
      }
    });
  }

  return (

    <ScrollView ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>
      <View>

        {/* // heading.Heading is a custom heading style set in constant.js */}
        {/* //first Element set here -------------------------------------------*/}

        <View style={styles.containerHeader}>
          <heading.Heading1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Accessibility Label Property"
          >
            Accessibility Label Property
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
            When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view, so people know what element they have selected. The label string will be announced when the user selects the associated element.
          </Text>
          <Text style={[styles.textContent, { color: theme.page.text }]}>
            In the example below, the accessibility label would default to "Press me!" however, since the accessibility label is set to "Tap me!" it will be announced instead.
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
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Tap me!"
              onPress={handlePress}
            >
              <View style={{ backgroundColor: theme.button.color, borderRadius: 10 }}>
                <Text style={[styles.buttonText, { color: theme.button.text }]}>Press me!</Text>
              </View>
            </TouchableOpacity>
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

        <ScrollView 
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <TwoVariableTable title="Pass/Fail Information" data={TwoVarData} cellTextStyle={{ fontWeight: 'bold', fontSize: 18 }} titleStyle={{ textAlign: 'center' }} />
        </ScrollView>

        <HorizontalLine/>

        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
          <PreviousPageButton PageName="Accessible" />
          <NextPageButton PageName="Role" />
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

export default AccessibilityHintProp;
