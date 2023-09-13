import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import themeContext from '../Themes/themeContext';


// Two-Variable Data Table Layout--

//     const data = {
//     columns: ['Year 1', 'Year 2', 'Year 3'],
//     rows: [
//         { label: 'Food 1', values: ['10', '20', "30"] },
//         { label: 'Food 2', values: ['5', '10', '15'] },
//         { label: 'Food 3', values: ['1', '2', "3"] },
//     ],
// };

//--------------------------------

const TwoVariableTable = () => {

    const { theme } = useContext(themeContext);

    const data = {
    columns: ['Year 1', 'Year 2', 'Year 3'],
    rows: [
        { label: 'Food 1', values: ['10', '20', "30"] },
        { label: 'Food 2', values: ['5', '10', '15'] },
        { label: 'Food 3', values: ['1', '2', "3"] },
    ],
};

    
    const renderHeader = () => (
        <View style={styles.headerRow}>
            <View style={[styles.headerCell, {backgroundColor: theme.twoVarTableHeaderBackground, borderColor: theme.twoVarTableBorderColor}]} />

            {/* Horizontal Variable----------------------------------------------- */}
            {data.columns.map((column) => (
                console.log(column),
                <View key={column} style={[styles.headerCell, {backgroundColor: theme.twoVarTableHeaderBackground, borderColor: theme.twoVarTableBorderColor}]}>
                    <Text 
                        accessibilityLabel={`${column} Column`}
                        style={[styles.headerText, {color: theme.twoVarTableHeaderTextColor}]}
                    >
                        {column}
                    </Text>
                </View>
            ))}
            {/* ---------------------------------------------------------------- */}


        </View>
    );

    const renderRow = (row) => (

        <View style={[styles.row, {backgroundColor: theme.twoVarTableBackgroundColor}]} key={row.label}>

            {/* Row Label (Vertical Variable)-------------------------------------- */}
            <View style={[styles.rowLabelCell, {backgroundColor: theme.twoVarTableHeaderBackground, borderColor: theme.twoVarTableBorderColor}]}>
                <Text 
                    accessibilityLabel={`${row.label} row`}
                    style={[styles.rowLabelText, {color: theme.twoVarTableHeaderTextColor}]}
                >
                    {row.label}
                </Text>
            </View>

            {/* //---------------------------------------------------------------- */}




            {/* Renders the data */}
            {row.values.map((value, valueIndex) => (
                console.log(value),
                <View key={value} style={[styles.cell, {borderColor: theme.twoVarTableBorderColor}]}>
                    <Text 
                        style={[styles.cellText, {color: theme.twoVarTableCellTextColor}]}
                        accessibilityLabel={`${value} of: Row ${row.label}, Column ${data.columns[valueIndex]} `}

                    >{value}</Text>
                </View>
            ))} 
            
        </View>
    );

    return (
        <ScrollView horizontal>
            <View style={styles.container}>
                {renderHeader()}
                {data.rows.map((row) => renderRow(row))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    headerRow: {
        flexDirection: 'row',
    },
    headerCell: {
        borderWidth: 1,
        padding: 8,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    rowLabelCell: {
        borderWidth: 1,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cell: {
        borderWidth: 1,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellText:{
        // paddingHorizontal: 40,
        paddingVertical: 10,
    },
    headerText: {
    },
    rowLabelText: {
    },
});

export default TwoVariableTable;





