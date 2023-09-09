import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


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

const TwoVariableTable = ({ data }) => {

    
    const renderHeader = () => (
        <View style={styles.headerRow}>
            <View style={styles.headerCell} />
            {data.columns.map((column) => (
                <View key={column} style={styles.headerCell}>
                    <Text>{column}</Text>
                </View>
            ))}
        </View>
    );

    const renderRow = (row) => (
        <View style={styles.row} key={row.label}>
            <View style={styles.rowLabelCell}>
                <Text>{row.label}</Text>
            </View>
            {row.values.map((value) => (
                <View key={value} style={styles.cell}>
                    <Text>{value}</Text>
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
        borderColor: 'black',
        padding: 8,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    row: {
        flexDirection: 'row',
    },
    rowLabelCell: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        minWidth: 100,
        backgroundColor: 'lightgray',
    },
    cell: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TwoVariableTable;





