import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import themeContext from '../../Themes/themeContext';

function HorizontalLine() {

    const {theme} = useContext(themeContext);

    return <View style={[styles.horizontalLine, {backgroundColor: theme.horizontalLine.color}]} />;
}

const styles = StyleSheet.create({
  horizontalLine: {
    height: 1, // You can adjust the height as needed
    marginVertical: 10, // Adjust the margin spacing above and below the line
    paddingVertical: 3, // Adjust the padding spacing above and below the line
    marginHorizontal: 10, //Adjust the margin spacing left and right of the line
    borderRadius: 10, //This gives the line a curved edge
  },
});

export default HorizontalLine;