import React, {useContext} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import themeContext from '../Themes/themeContext';


// const tableData = [
//   {
//     title: 'Test',
//     data: [
//       { id: 'History', col1: 'Data 1H', col2: 'Data 2H', col3: 'Value 1H', col4: 'Value 2H' },
//       { id: 'Math', col1: 'Data 2M', col2: 'Data 2M', col3: 'Value 1M', col4: 'Value 2M' },
//       // Add more data objects here
//     ],
//   },
// ];




const HorizontalTable = ({data}) => {
  

  const { theme } = useContext(themeContext);

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {data.map((section) => (
          <View key={section.title} style={[styles.section]}>
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
                      return <Text 
                                key={key}
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

