import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import {colors} from '../constant'

const ExternalLinkButton = ({ url, label }) => {
  const openWebsite = () => {
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          console.error('Opening URL is not supported on this device');
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <TouchableOpacity onPress={openWebsite} accessibilityRole='link' accessibilityHint={`This will take you to: ${url}`}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
   
  },
  
  buttonText: {
    color: colors.darkBlue,
    borderWidth: 2,
    borderColor: colors.darkBlue,
    fontWeight: 'bold',
    fontSize: 16,  
    borderRadius: 5,
    padding: 5,


  },
});

export default ExternalLinkButton;
