import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

//Theme Import
//================================================
import themeContext from '../../themes/themeContext';
//================================================

const TwoVariableTable = ({ data, title, cellTextStyle, titleStyle }) => {
  const { theme } = useContext(themeContext);

  // Calculate the maximum cell width based on the data
  const maxCellWidth = Math.max(
    ...data.rows.map((row) =>
      Math.max(row.label.length, ...row.values.map((value) => value.length))
    )
  );

  // Calculate the minimum cell width based on the font size
  const currentFontSize = 15;
  const cellMinWidth = maxCellWidth * (currentFontSize - 2);

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <View
        style={[
          styles.headerCell,
          {
            backgroundColor: theme.twoVar_Table.headerCell,
            borderColor: theme.twoVar_Table.border,
            minWidth: cellMinWidth + 2,
          },
        ]}
      />

      {data.columns.map((column) => (
        <View
          key={column}
          style={[
            styles.headerCell,
            {
              backgroundColor: theme.twoVar_Table.headerCell,
              borderColor: theme.twoVar_Table.border,
              minWidth: cellMinWidth,
              justifyContent: 'center',
            },
          ]}
        >
          <Text
            accessibilityLabel={`${column} Column`}
            accessibilityRole='header'
            accessibilityHint='Cell Header'
            style={[
              styles.headerText,
              {
                color: theme.twoVar_Table.headerText,
                fontSize: currentFontSize,
                minWidth: cellMinWidth,
                textAlign: 'center',
              },
            ]}
          >
            {column}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderRow = ({ item: row }) => (
    <View
      style={[
        styles.row, {
          backgroundColor: theme.twoVar_Table.cell
        }]
      }
      key={row.label}
    >
      <View
        style={[
          styles.rowLabelCell,
          {
            backgroundColor: theme.twoVar_Table.headerCell,
            borderColor: theme.twoVar_Table.border,
            minWidth: cellMinWidth,
            justifyContent: 'center',
          },
        ]}
      >
        <Text
          accessibilityLabel={`${row.label} row`}
          accessibilityRole='header'
          style={[
            styles.rowLabelText,
            {
              color: theme.twoVar_Table.headerText,
              fontSize: currentFontSize,
              minWidth: cellMinWidth,
              textAlign: 'center',
            },
          ]}
        >
          {row.label}
        </Text>
      </View>

      {row.values.map((value, valueIndex) => {
        const column = data.columns[valueIndex];
        return (
          <View
            key={value + [valueIndex]}
            style={[
              styles.cell, {
                borderColor: theme.twoVar_Table.border,
                minWidth: cellMinWidth
              }
            ]}
          >
            <Text
              style={[
                styles.cellText,
                {
                  color: theme.twoVar_Table.cellText,
                  fontSize: currentFontSize,
                  minWidth: cellMinWidth,
                  textAlign: 'center',
                  ...cellTextStyle,

                },
              ]}
              accessibilityLabel={`${value} of: Row ${row.label}, Column ${column}`}
            >
              {value}
            </Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <View style={[styles.container, ]}>
      <Text accessibilityRole='header' style={[styles.title, { color: theme.twoVar_Table.title, ...titleStyle}]}>{title}</Text>
      <ScrollView horizontal={true}>
        <FlatList
          accessibilityRole="grid"
          data={data.rows}
          keyExtractor={(item) => item.label}
          ListHeaderComponent={renderHeader}
          renderItem={renderRow}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerRow: {
    flexDirection: 'row',
  },
  headerCell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowLabelCell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    textAlign: 'center',
  },
  headerText: {},
  rowLabelText: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
  },
});

export default TwoVariableTable;
