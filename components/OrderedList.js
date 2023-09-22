import React, {useContext} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Example OrderedList Data
//================================================================

// const data = [
//   'Item 1',
//   'Item 2',
//   'Item 3',
//   'Item 4',
//   // Add more items here
// ];

//================================================================

// Using the component:
// =================================================================
// <OrderedList data={data} /> 
// =================================================================

const OrderedList = ({data}) => {


  //Theme management
  //================================================================
  const {theme} = useContext(themeContext);
  //================================================================

  return (
    <View>
    <FlatList
      accessibilityRole='list'
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.listItem}>
          <Text 
            style={{color: theme.orderedListText}}
            accessibilityLabel={`${item}, Item ${index+1} of ${data.length}`}
          >
            {`${index + 1}. ${item}`}
          </Text>
        </View>
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    // borderBottomWidth: 1,
    // borderColor: '#ccc',
  },

});

export default OrderedList;
