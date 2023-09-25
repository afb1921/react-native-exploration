import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import themeContext from '../Themes/themeContext';

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
    >
      {item[key]}
    </Text>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.row}>
              <FlatList
                accessibilityRole="grid"
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => (
                  <View
                    key={item.id}
                    style={[
                      styles.column,
                      { borderColor: theme.horizontal_Table.border },
                    ]}
                  >
                    {renderHeader(item.id)}
                    {Object.keys(item).map((key, index) =>
                      key !== 'id' ? renderCell(item, key, index) : null
                    )}
                  </View>
                )}
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



