import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

//EXAMPLE USE IN PAGE
//================================================
//This stores the input Value of the ComboBox
//--------------------------------
// const [selectedValue, setSelectedValue] = React.useState('Select a item');
//--------------------------------

//This handles updating the input Value for the selectedValue state (Shown above)
//NOTE each ComboBox needs its own unique handleInputChange and using its unique setSelectedValue
//--------------------------------
// const handleInputChange = (value) => {
//     setSelectedValue(value);

//   }
//--------------------------------

//Example Data:
//--------------------------------
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
//--------------------------------

//Rendering the componenet
//-------------------------------
{/* <View>
    <Text>Select a item:</Text>
    <ComboBox
        data={fruits}
        selectedValue={selectedValue}
        onValueChange={handleInputChange}
    />
    <Text>Selected Item: {selectedValue}</Text>
</View> */}
//-------------------------------

const ComboBoxWithInput = ({ data, selectedValue, onValueChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [customValue, setCustomValue] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handlePress = (item) => {
        onValueChange(item);
        toggleDropdown();
    };

    const handleInputChange = (text) => {
        setCustomValue(text);
    };

    const handleInputSubmit = () => {
        onValueChange(customValue);
        toggleDropdown();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleDropdown} style={styles.input}>
                <Text>{selectedValue}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <Text style={styles.dropdownItem}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Custom Value"
                        value={customValue}
                        onChangeText={handleInputChange}
                        onSubmitEditing={handleInputSubmit}
                    />
                </View>
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
    dropdown: {
        position: 'absolute',
        top: 40, // Adjust the top position as needed
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        maxHeight: 150,
        overflowY: 'auto',
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
});

export default ComboBoxWithInput;
