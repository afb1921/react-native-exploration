import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, AccessibilityInfo, TouchableOpacity, Modal } from 'react-native';
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


function AccessibilityViewIsModalProp() {

  const [modalVisible, setModalVisible] = useState(false);

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
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text, textAlign: 'center' }]}
            accessibilityLabel="iOS Only Example:"
          >
            iOS Only Example:
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
              <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}
                accessibilityViewIsModal={true}
              >
                <View>
                  <View>
                    <Text accessibilityRole='header'>
                      Modal Content
                    </Text>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      accessible={true}
                    >
                      <Text accessibilityRole='button'>
                        Close Modal
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => console.log('Button 2 pressed')}
                      accessible={true}
                    >
                      <Text accessibilityRole='button'>
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
                <Text>
                  Open Modal
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity
                  onPress={() => console.log('Button 3 pressed')}
                  accessible={true}
                  accessibilityRole='button'
                >
                  <Text>
                    Button 3
                  </Text>
                </TouchableOpacity>
              </View>
            </View>"
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

export default AccessibilityViewIsModalProp;
