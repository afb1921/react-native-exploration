import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//EXAMPLE TABLE FOR HORIZONTAL STYLE

//-------------------------------

// const dataTable = [
//       {
//           title: 'Test',
//           data: [
//               { id: 'History', col1: 'Data 1', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2'},
//               { id: 'Math', col1: 'Data 2', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
//               { id: 'English', col1: 'Data 3', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
//               { id: 'Science', col1: 'Data 4', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
//           ],
//       },
//   ];

//----------------------------


const HorizontalTable = ({ data }) => {
    const columnKeys = data.length > 0 ? Object.keys(data[0].data[0]) : []; // Get keys from the first item

    return (
        <ScrollView horizontal>
            <View style={styles.container}>
                {data.map((section) => (
                    <View key={section.title} style={[styles.section]}>
                        <Text style={[styles.sectionTitle]}>{section.title}</Text>
                        {columnKeys.map((columnKey) => (
                            <View key={columnKey} style={[styles.row]}>
                                {section.data.map((item) => (
                                    <View
                                        key={item.id}
                                        style={[
                                            styles.cell,
                                            columnKey === 'id' ? styles.headerCell : null,
                                        ]}
                                    >
                                        <Text>{item[columnKey]}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
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
        // marginRight: 20,
    },
    headerCell: {
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        // marginRight: 8,
        minWidth: 100,
    },
});

export default HorizontalTable;
