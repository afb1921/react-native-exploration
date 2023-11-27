import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

//Theme Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================

//EXAMPLE TABLE FOR HORIZONTAL DATA:
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
//  <HorizontalTable data={table_data} /> 
// =================================================================


const HorizontalTable = ({ data }) => {
  const { theme } = useContext(themeContext);

  const renderHeader = (headerText) => (
    <Text
      style={[
        styles.columnHeader,
        {
          backgroundColor: theme.horizontal_Table.headerCell,
          color: theme.horizontal_Table.headerCellText,
        },
      ]}
      accessibilityRole="header"
      accessibilityHint='cell Header'
      accessibilityLabel={headerText}
    >
      {headerText}
    </Text>
  );

  const renderCell = (item, key, index) => (
    <Text
      key={`${item.id}-${key}-${index}`}
      style={[
        styles.cell,
        {
          color: theme.horizontal_Table.cellText,
          borderColor: theme.horizontal_Table.border,
          backgroundColor: theme.horizontal_Table.cell,
        },
      ]}
      accessibilityLabel={`${item[key]} of ${item.id}`}
      accessibilityRole="text"
    >
      {item[key]}
    </Text>
  );

  return (
    <FlatList
      data={data}
      horizontal={true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text 
            accessibilityRole="header" 
            accessibilityHint="Table Title" 
            style={[styles.sectionTitle, {color: theme.horizontal_Table.title}]}
            accessibilityLabel={item.title}
          >
            {item.title}
          </Text>

          <ScrollView style={styles.section} horizontal={true} showsHorizontalScrollIndicator={false} accessibilityRole='grid'>
            <View style={styles.row}>
              {item.data.map((rowData, rowIndex) => (
                <View
                  key={`${item.title}-${rowIndex}`}
                  style={[
                    styles.column,
                    { borderColor: theme.horizontal_Table.border },
                  ]}
                >
                  {renderHeader(rowData.id)}
                  {Object.keys(rowData).map((key, columnIndex) =>
                    key !== 'id' ? renderCell(rowData, key, columnIndex) : null
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
    alignItems: 'center',
  },
  column: {
    borderWidth: 1,
    minWidth: 100,
  },
  cell: {
    borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 10,
    minWidth: 100,
    textAlign: 'center',
  },
});

export default HorizontalTable;
