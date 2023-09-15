import React, {useContext} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

//Theme Imports
//============================================================
import themeContext from '../Themes/themeContext';
//============================================================

// Example For Horizontal Table Data:
//===============================================================
// const table_data = [
//   {
//       title: "Test Table",
//       data: [
//           { id: 'Students', col1: 'Alex', col2: 'Sam', col3: 'Ben'},
//           { id: 'Classes', col1: 'Math', col2: 'Science', col3: 'English'},
              //Add more rows here...
//       ],
//   },
// ];
//================================================================

// Using the component:
// =================================================================
// <HorizontalTable data={table_data} /> 
// =================================================================

const HorizontalTable = ({data}) => {
  
  //Theme Management
  //================================================import Slider from 'react-native-slider';

  const { theme } = useContext(themeContext);
  //================================================

  return (
    <ScrollView horizontal>
      <View style={styles.container}>

        {data.map((section) => (
          <View key={section} style={[styles.section]}>
            <Text 
                style={[styles.sectionTitle]}
            >
                {section.title}
            </Text>

            <View style={[styles.row]}>

              {section.data.map((item) => (
                
                <View key={item.id} style={[styles.column, {borderColor: theme.horizontalTableBorder}]}>
                    <Text 
                        style={[styles.columnHeader, {backgroundColor: theme.horizontalTableHeader, color: theme.horizontalTableHeaderText}]}
                        accessibilityLabel={`${item.id} Column`}
                    >
                        {item.id}
                    </Text>

                  {Object.keys(item).map((key, index) => {

                    if (key !== 'id') {
                      // console.log(`${item.id}-${key}-${index}`)
                      return  <Text 
                                key={`${item.id}-${key}-${index}`} // Use a unique key here
                                
                                style={[styles.cell, {color: theme.horizontalTableText, borderColor: theme.horizontalTableBorder, backgroundColor: theme.horizontalTable}]}
                                accessibilityLabel={`${item[key]} of ${item.id} Row ${index}`}
                              >
                                {item[key]}
                            </Text>;
                    }
                  })}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  section: {
    marginRight: 20, // Adjust the spacing between data objects
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
  },
  columnHeader: {
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
  },
  column: {
    borderWidth: 1,
    minWidth: 100,
  },
  cell: {
    borderWidth: 1,
    borderTopWidth: 1, // Add top border
    borderBottomWidth: 1, // Add bottom border
    borderLeftWidth: 0, // Remove left border to avoid double borders
    borderRightWidth: 0, // Remove right border to avoid double borders
    padding: 10,
    minWidth: 100,
    textAlign: 'center', // Center text horizontally
   },
});

export default HorizontalTable;

