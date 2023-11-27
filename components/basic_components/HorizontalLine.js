import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

//Theme Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================

function HorizontalLine() {
  
    const {theme} = useContext(themeContext);
    return <View style={[styles.horizontalLine, {backgroundColor: theme.horizontalLine.color}]} />;
}

const styles = StyleSheet.create({
  horizontalLine: {
    height: 1,
    marginVertical: 10, 
    paddingVertical: 3,
    marginHorizontal: 10,
    borderRadius: 10, 
  },
});

export default HorizontalLine;