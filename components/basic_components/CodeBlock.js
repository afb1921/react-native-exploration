import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import themeContext from '../../Themes/themeContext';

const CodeBlock =({text}) => {

    const {theme} = useContext(themeContext);

    return (

        <View style={[styles.container, {backgroundColor: "black"}]}>
            <Text style={{color: "white"}}>{text}</Text>
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