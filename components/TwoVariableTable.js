import React, {useContext} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//Theme Imports
//================================================
import themeContext from '../Themes/themeContext';
//================================================


//Example Two-Variable Data Table
//================================================================

//     const table_data = {
//     columns: ['Year 1', 'Year 2', 'Year 3'],
//     rows: [
//         { label: 'Food 1', values: ['10', '20', "30"] },
//         { label: 'Food 2', values: ['5', '10', '15'] },
//         { label: 'Food 3', values: ['1', '2', "3"] },
//     ],
// };

//================================================================

// Using the component:
// =================================================================
// <TwoVariableTable data={table_data} /> 
// =================================================================

const TwoVariableTable = ({data}) => {

    //Theme Management
    //================================================================
    const { theme } = useContext(themeContext);
    //================================================================
 
    const renderHeader = () => (
        <View style={styles.headerRow}>
            <View style={[styles.headerCell, {backgroundColor: theme.twoVarTableHeader, borderColor: theme.twoVarTableBorder}]} />

            {/* Horizontal Variable=============================*/}
            {data.columns.map((column) => (
                // console.log(column),
                <View key={column} style={[styles.headerCell, {backgroundColor: theme.twoVarTableHeader, borderColor: theme.twoVarTableBorder}]}>
                    <Text 
                        accessibilityLabel={`${column} Column`}
                        style={[styles.headerText, {color: theme.twoVarTableHeaderText}]}
                    >
                        {column}
                    </Text>
                </View>
            ))}
            {/*===================================================*/}
        </View>
    );

    const renderRow = (row) => (

        <View style={[styles.row, {backgroundColor: theme.twoVarTable}]} key={row.label}>

            {/* Row Label (Vertical Variable)===============================*/}
            <View style={[styles.rowLabelCell, {backgroundColor: theme.twoVarTableHeader, borderColor: theme.twoVarTableBorder}]}>
                <Text 
                    accessibilityLabel={`${row.label} row`}
                    style={[styles.rowLabelText, {color: theme.twoVarTableHeaderText}]}
                >
                    {row.label}
                </Text>
            </View>

            {/*=====================================================*/}




            {/* Renders the data for each cell============================================= */}
            {row.values.map((value, valueIndex) => (
                console.log(value),
                <View key={value} style={[styles.cell, {borderColor: theme.twoVarTableBorder}]}>
                    <Text 
                        style={[styles.cellText, {color: theme.twoVarTableCellText}]}
                        accessibilityLabel={`${value} of: Row ${row.label}, Column ${data.columns[valueIndex]} `}

                    >{value}</Text>
                </View>
            ))} 
            {/* //================================================================ */}
            
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





