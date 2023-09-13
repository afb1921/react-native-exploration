import React, {useContext} from 'react';
import { View, Text, Image, AccessibilityInfo, StyleSheet, SectionList } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors, heading } from '../constant';


//EXAMPLE TABLE FOR VERTICAL STYLE

//-------------------------------

// const data = [
//         {
//             title: 'Test',
//             data: [
//                 { id: 'History', col1: 'Data 1', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2'},
//                 { id: 'Math', col1: 'Data 2', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
//                 { id: 'English', col1: 'Data 3', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
//                 { id: 'Science', col1: 'Data 4', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
//             ],
//         },
//     ];

//   //----------------------------


const VerticalTable = ({data}) => {

    const { theme } = useContext(themeContext);

    const renderItem = ({ item }) => (
        <View style={[styles.tableRow]}>
            {Object.keys(item).map((key, index) => (
                // console.log(`${key}`),
                <Text
                    key={`${item.id}`+index}
                    style={[
                        [styles.tableCell, {color: theme.tableCellText, borderColor: theme.verticalTableBorder, backgroundColor: theme.verticalTableCell} ],
                        index === 0 ? [styles.headerCell, {backgroundColor: theme.verticalTableHeaderCell, color: theme.verticalTableHeaderCellText}] : null,
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
        textAlign: 'center',
    },
    headerCell: {
        fontWeight: 'bold',
        textAlign: 'left',
    },

});

export default VerticalTable;
