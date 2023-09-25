import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

const OrderedList = ({ data, numberingStyle }) => {
  //Theme management
  //================================================================
  const { theme } = useContext(themeContext);
  //================================================================

  const renderNumber = (index) => {
    switch (numberingStyle) {
      case 'roman':
        return convertToRoman(index + 1);
      case 'lettered-upper':
        return String.fromCharCode(65 + index); // Start with 'A' for the first item
        case 'lettered-lower':
        return String.fromCharCode(97 + index); // Start with 'a' for the first item
      default:
        return index + 1;
    }
  };

  const convertToRoman = (num) => {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let result = '';

    for (const key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }

    return result;
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <Text
        style={{ color: theme.orderedList.text }}
        accessibilityLabel={`${item.label}, Item ${renderNumber(index)} of ${data.length}`}
      >
        {`${renderNumber(index)}. ${item.label}`}
      </Text>
      {item.subItems && item.subItems.length > 0 && (
        <OrderedList data={item.subItems} numberingStyle={numberingStyle} />
      )}
    </View>
  );

  return (
    <View>
      <FlatList
        accessibilityRole='list'
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
  },
});

export default OrderedList;
