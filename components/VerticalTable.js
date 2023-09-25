import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import themeContext from '../Themes/themeContext';

// // //EXAMPLE TABLE FOR VERTICAL DATA:
// // //===============================================================
// // // const table_data = [
// // //   {
// // //       title: "Test Table",
// // //       data: [
// // //           { id: 'Students', col1: 'Alex', col2: 'Sam', col3: 'Ben'},
// // //           { id: 'Classes', col1: 'Math', col2: 'Science', col3: 'English'},
// //               //Add more rows here...
// // //       ],
// // //   },
// // // ];
// // //================================================================


// // // Using the component:
// // // =================================================================
// // //  <VerticalTable data={table_data} /> 
// // // =================================================================

const VerticalTable = ({ data }) => {
  const { theme } = useContext(themeContext);
  const [maxCellWidth, setMaxCellWidth] = useState(7);
  const [currentFontSize, setFontSize] = useState(15);

  useEffect(() => {
    // Iterate through the data to find the maximum cell width
    data.forEach((section) => {
      section.data.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (item[key].length > maxCellWidth) {
            setMaxCellWidth(item[key].length);
          }
        });
      });
    });
  }, [data]);

  const renderHeader = (headerText) => (
    <Text
      style={[
        styles.columnHeader,
        {
          backgroundColor: theme.vertical_Table.headerCell,
          color: theme.vertical_Table.headerCellText,
          fontSize: currentFontSize,
          minWidth: maxCellWidth * (currentFontSize - 2) + 5,
        },
      ]}
      accessibilityRole="header"
    >
      {headerText}
    </Text>
  );

  const renderItem = (item, index) => (
    <View
      key={`${item.id}-${index}`}
      style={[
        styles.column,
        { borderColor: theme.vertical_Table.border },
      ]}
    >
      {renderHeader(item.id)}
      {Object.keys(item).map((key, subIndex) => {
        if (key !== 'id') {
          return (
            <Text
              key={`${item.id}-${key}-${subIndex}`}
              style={[
                styles.cell,
                {
                  color: theme.vertical_Table.cellText,
                  borderColor: theme.vertical_Table.border,
                  backgroundColor: theme.vertical_Table.cell,
                  fontSize: currentFontSize,
                  minWidth: maxCellWidth * (currentFontSize - 2) + 5,
                },
              ]}
              accessibilityLabel={`${item[key]}, ${item.id} ${subIndex} of ${
                Object.keys(item).filter((k) => k !== 'id').length
              }`}
            >
              {item[key]}
            </Text>
          );
        }
      })}
    </View>
  );

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {data.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.row}>
              <FlatList
                accessibilityRole="grid"
                keyExtractor={(item, index) => index.toString()}
                data={section.data}
                renderItem={({ item, index }) => renderItem(item, index)}
              />
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
    marginRight: 20,
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
    textAlign: 'center',
  },
  column: {
    borderWidth: 1,
    flexDirection: 'row',
    marginRight: 20,
  },
  cell: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default VerticalTable;

