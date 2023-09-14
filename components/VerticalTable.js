import React, {useContext} from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//EXAMPLE TABLE FOR VERTICAL DATA:
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
//  <VerticalTable data={table_data} /> 
// =================================================================


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
