import React, {} from 'react';
import { View, Text, Image, AccessibilityInfo, StyleSheet, SectionList } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors, heading } from '../constant';


const HorizontalTable = ({data}) => {

    const renderItem = ({ item }) => (
        <View style={styles.tableRow}>
            {Object.keys(item).map((key, index) => (
                <Text
                    key={key}
                    style={[
                        styles.tableCell,
                        index === 0 ? styles.headerCell : null,
                    ]}
                    accessibilityLabel={
                        index === 0
                            ? `${item.id} Row`
                            : `${item[key]} of ${item.id} Column ${index}`
                    }
                >
                    {item[key]} {/* Display the value of the current column */}
                </Text>
            ))}
        </View>
    );

    return ( 
        <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    headerCell: {
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
    },

});

export default HorizontalTable;
