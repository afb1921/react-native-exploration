import React, { useContext, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, AccessibilityInfo, ScrollView } from 'react-native';

//Theme Import
//================================================
import themeContext from '../../Themes/themeContext';
//================================================

//EXAMPLE USE IN PAGE
//================================================
//This stores the selected Values of the Drop Down
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the selected Values for the selected values state (Shown above)
//NOTE each drop down needs its own unique handleChange and using its unique setSelectedValues
//--------------------------------
// const handleChange = (value) => {
//     setSelectedValues(value);
//   };
//--------------------------------

//Example Data:
//--------------------------------
// const data = [
//   'Apple',
//   'Orange',
//   'Banana',
//   'Grapes',
//   // Add more items here
// ];
//--------------------------------

//Rendering the componenet
//-------------------------------
{/* <View>
    <Text>{selectedValues}</Text> //This will show the selected value ensure its styled
    <Dropdown
        title={"Select a fruit"}
        data={data}
        onValueChange={handleChange}
    />
</View> */}
//-------------------------------

const Dropdown = ({ data, onValueChange, title }) => {
    const { theme } = useContext(themeContext); // Current theme context
    const [isOpen, setIsOpen] = useState(false); //Set the state of the dropdown
    const [selectedItem, setSelectedItem] = useState('none'); //Set the selected item
    const dropDownRef = useRef(null); // Ref for the dropdown (used to maintain focus)

    const handleFocus = (ref) => { //This handles maintaining focus on the drop down when a value is selected
        if (Platform.OS === 'ios') { //If IOS
            const delay = 250;
            setTimeout(() => {
                AccessibilityInfo.setAccessibilityFocus(ref.current._nativeTag); //This will set focus on the combo box

            }, delay);
        }
        else {
            AccessibilityInfo.setAccessibilityFocus(ref.current._nativeTag); //This will set focus on the combo box
        }
    }

    const toggleDropdown = () => { // Toggles the dropdown
        setIsOpen(!isOpen);
    };

    const handlePress = (item) => { //Trigger when a item is selected in the dropdown
        console.log("handlePress")
        setSelectedItem(item); //Set the selected item
        onValueChange(item);
        toggleDropdown();
        handleFocus(dropDownRef)
    };

    const isComboboxExpanded = isOpen;

    return (
        <View style={styles.container}>
            <Text importantForAccessibility='no' accessible={false} style={{ color: theme.dropDown.title }}>{title}</Text>
            <TouchableOpacity
                ref={dropDownRef}
                onPress={toggleDropdown}
                style={[styles.input, { backgroundColor: theme.dropDown.selectedBackgroundColor }]}
                accessibilityRole="button"
                accessibilityHint={`${title} Dropdown`}
                accessibilityState={{
                    expanded: isComboboxExpanded,
                }}
                accessibilityLabel={selectedItem}
            >
                <Text style={{ color: theme.dropDown.selectedText }}>{selectedItem}</Text>
            </TouchableOpacity>
            {isOpen && (
                <ScrollView style={{width: '100%'}} horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
                    <FlatList
                        data={[...data]}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item, index }) => ( //Renders a list of items using data
                        <View style={styles.itemContainer}>
                            <TouchableOpacity onPress={() => handlePress(item)} style={{ backgroundColor: theme.dropDown.listBackgroundColor, borderWidth: 1, borderColor: theme.dropDown.borderColor }}>
                                <Text style={[styles.dropdownItem, { color: theme.dropDown.itemText }]} accessibilityLabel={`${item}, ${index + 1} of ${data.length}`}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                    />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemContainer: {
        flex: 1, // This expands the item to the full width
      },

});

export default Dropdown;

