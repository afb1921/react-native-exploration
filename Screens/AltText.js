import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { View, Text, AccessibilityInfo, TouchableOpacity, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { colors, def_Page, heading } from '../constant';



function AltText() {
  
  const firstElementRef = useRef(null); //firstElementRef is used to focus on the first element

  // When the page loads (everytime) the useFocusEffect is triggered
  // This is used to bring focus on the first element
  useFocusEffect(() => {
     // Get the reactTag of the component to set focus on
     const reactTag = firstElementRef.current._nativeTag;
     // Set accessibility focus to the component
    AccessibilityInfo.setAccessibilityFocus(reactTag); //This sets the accessibility focus to the given element (this case first element)
    console.log('AltText Focus Effect');
  });

  const handleButtonClick = () => {
    console.log('Hello world!');
  };

  return (
    <View style={styles.container}>

      {/* // heading.Heading is a custom heading style set in constant.js */}
      {/* //first Element set here -------------------------------------------*/}
      
      <View style={{alignItems:"center"}}>
        <heading.Heading1 
          ref={firstElementRef}>Importance of Alternative Text
        </heading.Heading1> 
      </View>
      {/* // -----------------------------------------------------------------*/}





     
     
     
     
      <heading.Heading1>Testing</heading.Heading1>






      <TouchableOpacity onPress={handleButtonClick}>
        <Text>Set Focus</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center', //Aligns content horizontally center
  },
  

});

export default AltText;
