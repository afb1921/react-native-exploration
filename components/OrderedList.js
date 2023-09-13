import React, {useContext} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

// Example Use:

// const data = [
//   'Item 1',
//   'Item 2',
//   'Item 3',
//   'Item 4',
//   // Add more items here
// ];


{/* <OrderedList orderedListData={data}/> */}

// -------------------------



const OrderedList = ({data}) => {

  const {theme} = useContext(themeContext);

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.listItem}>
          <Text style={{color: theme.orderedListText}}>
            {`${index + 1}. ${item}`}
          </Text>
        </View>
      )}
    />
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
