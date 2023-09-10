import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// const unorderedListData = [
//   'Item 1',
//   'Item 2',
//   'Item 3',
//   'Item 4',
//   // Add more items here
// ];

const UnorderedList = ({unorderedListData}) => {
  return (
    <FlatList
      data={unorderedListData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        console.log(item),
        <View style={styles.listItem}>
          <View style={styles.bullet}>
            <Text 
                style={styles.bulletText}
                importantForAccessibility='no'
                accessible={false}
            >
                {'\u2022'}
            </Text>
          </View>
          <Text     
            style={styles.listItemText}
            accessibilityLabel={`Bullet ${item}`} 
        >
          {item}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 5,
    // borderBottomWidth: 1,
    // borderColor: '#ccc',
    textAlign: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
  },
  bullet: {
    marginRight: 8, // Adjust the spacing between the bullet and text
  },
  bulletText: {
    fontSize: 25, // Adjust the font size of the bullet
  },
  listItemText:{
    fontSize: 15,
  }
});

export default UnorderedList;
