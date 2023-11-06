import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {resetScroll, accessibilityFocus, announceScreenReaderStatus} from '../functions/accessibility_functions'
import {heading} from '../components/headings';
import { colors } from '../constant'
import { TouchableOpacity } from 'react-native-gesture-handler';


//Theme Import
//================================================
import themeContext from '../Themes/themeContext';
//================================================

function ScreenReaderEnabledCheck() {

  const pressHandler = ()=>{
    announceScreenReaderStatus();
  }

  //Theme Manangement
  //===============================================================
  const { theme } = React.useContext(themeContext);
  //===============================================================

  const firstElementRef = React.useRef(null);
  const scrollViewRef = React.useRef(null);

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
          <heading.Heading1 //Heading 1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Screen Reader Enabled Check"
          >
            Screen Reader Enabled Check
          </heading.Heading1>
        </View>



        <TouchableOpacity style={{marginTop: 10, alignItems: 'center'}} onPress={pressHandler} accessibilityRole='button'>
                <View style={{backgroundColor: theme.button.color, borderRadius: 10}}>
                  <Text style={{color: theme.button.text, padding: 10}}>Screen Reader Check</Text>
                </View>
        </TouchableOpacity>





      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  //Header Styles relating to "Example Components"
  //================================================
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
  },
  containerHeaderText: {
    color: "white",
  },
  //================================================

  //General Styles
  //================================================ 
  textContent: {        //This style is general text style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  heading2: {        //Heading 2 style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  heading3: {        //Heading 3 style
    paddingTop: 1,
    paddingBottom: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //================================================

});

export default ScreenReaderEnabledCheck;
