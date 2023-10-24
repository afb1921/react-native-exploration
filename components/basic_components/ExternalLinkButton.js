import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Linking } from 'react-native';

//Theme Import
//================================================
import themeContext from '../../Themes/themeContext';
//================================================

const ExternalLinkButton = ({ url, label }) => {

  const {theme} = useContext(themeContext);

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
    // <TouchableOpacity  accessibilityRole='link' accessibilityHint={`This will take you to: ${url}`}>
      <View style={styles.button}>
        <Text onPress={openWebsite} accessibilityRole='link' style={[styles.buttonText, {borderColor: theme.externalLink.borderColor, color: theme.externalLink.text}]}>{label}</Text>
      </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  
  buttonText: {
    borderWidth: 2,
    fontWeight: 'bold',
    fontSize: 16,  
    borderRadius: 5,
    padding: 5,


  },
});

export default ExternalLinkButton;
