import React, { useRef, useContext, useState } from 'react';
import { View, Text, Image, AccessibilityInfo, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import CodeHighlighter from "react-native-code-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors } from '../constant';
import { heading } from '../components/headings';
import { resetScroll, accessibilityFocus } from '../functions/accessibility_functions'
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
import ModalSelection from '../components/basic_components/ModalSelection';
import VerticalTable from '../components/basic_components/VerticalTable';
import HorizontalTable from '../components/basic_components/HorizontalTable';
import TwoVariableTable from '../components/basic_components/TwoVariableTable';
import OrderedList from '../components/basic_components/OrderedList';
import UnorderedList from '../components/basic_components/UnorderedList';
import TextField from '../components/basic_components/TextField';
import ocean_video from '../assets/videos/oceanvideo.mp4';
import Videoplayer from '../components/basic_components/Videoplayer';
import RadioButton from '../components/basic_components/RadioButton';
import Accordion from '../components/basic_components/Accordion';
import CheckBox from '../components/basic_components/Checkbox';
import ProgressBar from '../components/basic_components/ProgressBar';
import SpinButton from '../components/basic_components/SpinButton';
import ComboBox from '../components/basic_components/ComboBox';
import Dropdown from '../components/basic_components/Dropdown';
import ExternalLinkButton from '../components/basic_components/ExternalLinkButton';
import CodeBlock from '../components/basic_components/CodeBlock';
//-----------------------------------------------------------------

const HomeScreen = () => {
  const CODE_STR = `var hello = "world"`;


  //Theme Manangement-----------------------------------------------
  const { theme } = useContext(themeContext);
  //----------------------------------------------------------------

  // // Focus Managment 
  // //---------------------------------------------------------------
  const firstElementRef = useRef(null);
  // //----------------------------------------------------------------
  //When the page loads (everytime) the useFocusEffect is triggered
  useFocusEffect(
    React.useCallback(() => {
      // resetScroll(scrollViewRef);
      accessibilityFocus(firstElementRef, 250);
    }, [])
  )


  return (
    
    <View style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>

      {/* //first Element set here -------------------------------------------*/}
      {/* // heading.Heading is a custom heading style set in constant.js */}

      <View style={styles.containerHeader}>
        <heading.Heading1
          ref={firstElementRef} //First Element For Focus set here!
          style={styles.containerHeaderText}
          accessible={true}
          accessibilityLabel="Home Screen"
          accessibilityRole="header"
        >
          Home Screen
        </heading.Heading1>

      </View>
      {/* // -----------------------------------------------------------------*/}
      <CodeHighlighter
			hljsStyle={atomOneDarkReasonable}
			textStyle={styles.text}
			language="typescript"
		>
			{CODE_STR}
		</CodeHighlighter>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },


  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,

  },
  containerHeaderText: {
    color: "white",
  },
  iconContainer: {
    alignItems: 'center',
  },
  contentColor: {
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },


});

export default HomeScreen;
