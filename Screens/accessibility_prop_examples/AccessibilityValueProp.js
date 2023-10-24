import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Slider from "@react-native-community/slider";
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
//============================================================================

//Theme Import
//============================================================================
import themeContext from '../../Themes/themeContext';
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


function AccessibilityValueProp() {

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0);

  const CODE_STR =
  `<View style={[styles.exampleContainer]}>
  <Slider
    accessibilityRole='adjustable'
    style={{ width: 200, height: 40 }}
    thumbTintColor={theme.slider.thumbTintColor}
    minimumTrackTintColor={theme.slider.minimumTrackTintColor}
    minimumValue={0}
    maximumValue={1}
    maximumTrackTintColor={theme.slider.maximumTrackTintColor}
    value={sliderValue}
    accessibilityValue={{
      min: 0,          // The minimum value of the range
      max: 1,          // The maximum value of the range
      now: sliderValue, // The current value within the range
    }}
    importantForAccessibility='yes'
  />
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
            accessibilityLabel="Accessibility Value Property"
          >
            Accessibility Value Property
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
            Represents the current value of a component.
            It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum).
          </Text>
          <Text style={[styles.textContent, { color: theme.page.text }]}>
            It contains the following fields:
            min: the minimum value of this component's range,
            max: the maximum value of this component's range,
            now: the current value of this component's range,
            text: a textual description of this component's value. Will override min, now, and max if set.
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
            <Slider
              accessibilityRole='adjustable'
              style={{ width: 200, height: 40 }}
              thumbTintColor={theme.slider.thumbTintColor}
              minimumTrackTintColor={theme.slider.minimumTrackTintColor}
              minimumValue={0}
              maximumValue={1}
              maximumTrackTintColor={theme.slider.maximumTrackTintColor}
              value={sliderValue}
              accessibilityValue={{
                min: 0,          // The minimum value of the range
                max: 1,          // The maximum value of the range
                now: sliderValue, // The current value within the range
              }}
              importantForAccessibility='yes'
            />
          </View>

          <HorizontalLine />

          <View>
            <heading.Heading2 //Heading 2
              style={[styles.heading2, { color: theme.page.text, textAlign: 'center' }]}
              accessibilityLabel="Code Example:"
            >
              Code Example:
            </heading.Heading2>

            <CodeHighlighter
              hljsStyle={atomOneDarkReasonable}
              textStyle={styles.text}
              language="typescript"
              containerStyle={styles.codeContainer}
            >
              {CODE_STR}
            </CodeHighlighter>
          </View>
        </View>

        <HorizontalLine />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
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

export default AccessibilityValueProp;
