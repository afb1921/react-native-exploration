import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, AccessibilityInfo } from 'react-native';
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
import PreviousPageButton from '../../../components/PreviousPageButton';
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


function AccessibilityViewIsModalProp() {

  const [modalVisible, setModalVisible] = useState(false);

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);
  const modalRef = useRef(null);

  const CODE_STR =
    `          <View style={[styles.exampleContainer]}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
      accessibilityViewIsModal={true} // Set accessibilityViewIsModal to true for the modal
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }} accessibilityRole='header'>
            Modal Content
          </Text>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            accessible={true}
          >
            <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }} accessibilityRole='button'>
              Close Modal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Button 2 pressed')}
            accessible={true}
          >
            <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 5 }} accessibilityRole='button'>
              Button 2
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      accessible={true}
      accessibilityRole='button'
    >
      <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}>
        Open Modal
      </Text>
    </TouchableOpacity>

    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        onPress={() => console.log('Button 3 pressed')}
        accessible={true}
        accessibilityRole='button'
      >
        <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 5 }}>
          Button 3
        </Text>
      </TouchableOpacity>
    </View>
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
            accessibilityLabel="Accessibility View is Modal Property"
          >
            Accessibility View is Modal Property
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
            The 'accessibilityViewIsModal' property when set to 'true', creates a modal-like experience for accessibility, isolating focus of VoiceOver to a specifc view and its children, while ignoring other sibling views at the same level.
          </Text>
          <Text style={[styles.textContent, { color: theme.page.text, marginTop: 10 }]}>
            Please note this is for iOS-VoiceOver only.
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}
                accessibilityViewIsModal={true} // Set accessibilityViewIsModal to true for the modal
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }} accessibilityRole='header'>
                      Modal Content
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(false);
                        accessibilityFocus(modalRef, 100);
                      }}
                      accessible={true}
                    >
                      <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }} accessibilityRole='button'>
                        Close Modal
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => console.log('Button 2 pressed')}
                      accessible={true}
                    >
                      <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 5 }} accessibilityRole='button'>
                        Button 2
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                accessible={true}
                accessibilityRole='button'
              >
                <Text ref={modalRef} style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 5 }}>
                  Open Modal
                </Text>
              </TouchableOpacity>

              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  onPress={() => console.log('Button 3 pressed')}
                  accessible={true}
                  accessibilityRole='button'
                >
                  <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 5 }}>
                    Button 3
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
          <PreviousPageButton PageName="Language" />
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

export default AccessibilityViewIsModalProp;
