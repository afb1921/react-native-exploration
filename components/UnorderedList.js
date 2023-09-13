import React, {useContext} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------


// const unorderedListData = [
//   'Item 1',
//   'Item 2',
//   'Item 3',
//   'Item 4',
//   // Add more items here
// ];

const UnorderedList = ({data}) => {

  const {theme} = useContext(themeContext);

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <View style={styles.bullet}>
            <Text 
                style={[styles.bulletText, {color: theme.unorderedListBullet}]}
                importantForAccessibility='no'
                accessible={false}
            >
                {'\u2022'}
            </Text>
          </View>
          <Text     
            style={[styles.listItemText, {color: theme.unorderedListText}]}
            accessibilityLabel={`Bullet ${item}`} 
          >
            {item}
          </Text>
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
