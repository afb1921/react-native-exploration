// ContactScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import useAccessibilityAnnouncement from '../components/useAccessibilityAnnouncement'; 

function ContactScreen() {


    // Accessibility Screen Change Notification

    const announceWithPriority = useAccessibilityAnnouncement();

    useFocusEffect(
      React.useCallback(() => {
        announceWithPriority('Contact Screen');
      }, [announceWithPriority])
    );



  return (
    <View>
      <Text>Welcome to the Contact Screen!</Text>

 </View>



  );
}

export default ContactScreen;
