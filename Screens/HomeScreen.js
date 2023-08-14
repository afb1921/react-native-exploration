// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, AccessibilityInfo} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import useAccessibilityAnnouncement from '../components/useAccessibilityAnnouncement'; 
import { useEffect } from 'react';




function HomeScreen({ navigation }) {

  useEffect(() => {
    console.log('homescreen.js useEffect triggered'); //For debugging purposes

     //Screen reader accessiblity announcement--------------------------------
     AccessibilityInfo.announceForAccessibility('Accessibility Demo App');
     //-----------------------------------------------------------------------

  }, []);

  // Accessibility Screen Change Notification

  const announceWithPriority = useAccessibilityAnnouncement();

  useFocusEffect(
    
    React.useCallback(() => {
      announceWithPriority('Home Screen');
      console.log('HomeScreen useFocusEffect triggered'); //For debugging purposes

    }, [announceWithPriority])
  );

  //-----------------------------------------


  return (
    <View>
      <Text>Home Page</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 20,
          marginTop: 20,
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Next Page</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
