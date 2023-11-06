import React, { useRef, useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors } from '../constant';
import { heading } from '../components/headings';
import { accessibilityFocus } from '../functions/accessibility_functions'
import ExternalLinkButton from '../components/basic_components/ExternalLinkButton';
//-----------------------------------------------------------------

const HomeScreen = () => {

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

      <View style={styles.container2}>
      <Text style={[styles.textContent, { color: theme.page.text, marginTop: 10 }]}>
          This project is an exploration of React Native that demos 
          accessibility features of the framework, providing examples of components, accessibility property use, 
          pass/fail information on whether the platform fully supports the accessibility feature within the app.
      </Text>
      <Text style={[styles.textContent, { color: theme.page.text, marginTop: 10 }]}>
          To learn even more about React Native's Accessibility, please visit the React Native Accessibility Documentation below.
      </Text>
      <ExternalLinkButton url="https://reactnative.dev/docs/accessibility" label="React Native Accessibility Docs"/>  
      </View>

      {/* // -----------------------------------------------------------------*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200
  },
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,

  },
  containerHeaderText: {
    color: "white",
  },
  textContent: {        //This style is general text style
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
