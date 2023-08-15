// import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  const Heading1 = ({ children }) => {
    return <Text style={styles.heading1} accessibilityRole='header'>{children}</Text>;
  };
  
  const Heading2 = ({ children }) => {
    return <Text style={styles.heading2} accessibilityRole='header'>{children}</Text>;
  };
  
  const Heading3 = ({ children }) => {
    return <Text style={styles.heading3} accessibilityRole='header'>{children}</Text>;
  };
  

  return (
    <View style={styles.container}>
      <View>
        
    
        <Heading1>This is Heading 1</Heading1>
        <Heading2>This is Heading 2</Heading2>
        <Heading3>This is Heading 3</Heading3>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    },
    heading1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    heading2: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    heading3: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },

});
