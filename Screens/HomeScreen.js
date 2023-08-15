import React, { useEffect, useRef } from 'react';
import { View, Text, AccessibilityInfo, TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


function HomeScreen() {

  const firstElementRef = useRef(null);
  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect(() => {
     // Get the reactTag of the component to set focus on
     const reactTag = firstElementRef.current._nativeTag;
     // Set accessibility focus to the component
    AccessibilityInfo.setAccessibilityFocus(reactTag);
    console.log('Focus Effect');
  });

  const handleButtonClick = () => {
    console.log('Hello world!');
  };

  return (
    <View>
      <Text ref={firstElementRef}>Home Page</Text>
      <TouchableOpacity onPress={handleButtonClick}>
        <Text>Set Focus</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
