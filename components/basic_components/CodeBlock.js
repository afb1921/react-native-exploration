import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//Theme Import
//================================================
import themeContext from '../../Themes/themeContext';
//================================================

const CodeBlock =({text}) => {

    const {theme} = useContext(themeContext);

    return (
        <View style={[styles.container, {backgroundColor: theme.codeBlock.background}]}>
            <Text style={{color: theme.codeBlock.text}}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
  },
});

export default CodeBlock;