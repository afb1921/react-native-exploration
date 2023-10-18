import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Asset Imports
//============================================================================
import { colors} from '../../../constant';
import { FontAwesome } from '@expo/vector-icons';
import {resetScroll, accessibilityFocus} from '../../../functions/accessibility_functions'
//============================================================================

//Component Imports
//============================================================================
import {heading} from '../../../components/headings';
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
    { label: 'IOS-VoiceOver', values: ["FAIL"] },
    { label: 'Android-TalkBack', values: ['PASS'] },
  ],
};
//================================================================


function AccessibilityLiveRegionProp() {

  const [value, setValue] = useState(0);

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  const incrementValue=() =>{
    setValue(value+1);
    console.log(value+1);
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
            accessibilityLabel="Accessibility Live Region Property"
          >
            Accessibility Live Region Property
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
            When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.
          </Text>
          <Text style={[styles.textContent, { color: theme.page.text }]}>
            It can be set to none, polite and assertive: none: Accessibility services should not announce changes to this view. Polite: Accessibility services should announce changes to this view. Assertive; Accessibility services should interrupt ongoing speech to immediately announce changes to this view.
          </Text>
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text, textAlign: 'center' }]}
            accessibilityLabel="Example: (For Polite)"
          >
            Example (For Polite):
          </heading.Heading2>

          <View style={[styles.exampleContainer]}>
            <View>
              <TouchableWithoutFeedback onPress={incrementValue}>
                <View style={{backgroundColor: theme.button.color, borderRadius: 10}}>
                  <Text style={{color: theme.button.text, padding: 10}}>Click me!</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Text style={{color: theme.page.text}} accessibilityLiveRegion="polite">Clicked {value} times</Text>
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
              <View>
              <TouchableWithoutFeedback onPress={incrementValue}>
                <View>
                  <Text>Click me!</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Text accessibilityLiveRegion='polite'>Clicked {value} times</Text>"
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

export default AccessibilityLiveRegionProp;
