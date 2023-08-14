import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import useAccessibilityAnnouncement from '../components/useAccessibilityAnnouncement';

function AboutScreen({ navigation }) {
  const announceWithPriority = useAccessibilityAnnouncement();

  useFocusEffect(
    React.useCallback(() => {
      announceWithPriority('About Screen');
    }, [announceWithPriority])
  );

  return (
    <View>
      <Text>About Page</Text>
      <TouchableOpacity 
        accessibilityLabel="Next Page"
        style={{
          backgroundColor: 'red',
          padding: 20,
          marginTop: 20,
          borderRadius: 7,
        }}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Next Page</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AboutScreen;
