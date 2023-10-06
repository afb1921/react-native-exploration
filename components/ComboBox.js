import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, AccessibilityInfo, Platform } from 'react-native';
import themeContext from '../Themes/themeContext';

//EXAMPLE USE IN PAGE
//================================================
//This stores the selected Values of the ComboBox
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the selected Values for the selected values state (Shown above)
//NOTE each comboBox needs its own unique handleChange and using its unique setSelectedValues
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
    <ComboBox
        title={"Select a fruit"}
        data={data}
        onValueChange={handleChange}
    />
</View> */}
//-------------------------------


const ComboBox = ({ data, onValueChange, title }) => { //Give data, title, and onValueChange as a prop, data is a array of items, onValueChange will 
                                                        //trigger a function in the parent component to be triggered when a value is selected
    const { theme } = useContext(themeContext); // Current theme context
    const [isComboBoxOpen, setIsComboBoxOpen] = useState(false); // set and contains the state of the combo box
    const [customValue, setCustomValue] = useState(''); //contains the current value of Custom Value Input
    const [selectedItem, setSelectedItem] = useState('none');
    const comboBoxRef = useRef(null); //Ref for Combo Box used to re focus to combo box after value change

    const handleFocus = (ref) => { //This handles maintaining focus on the combo box when a value is selected
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

    const toggleComboBox = () => { //This will toggle the state of the combo box
        setIsComboBoxOpen(!isComboBoxOpen);
    };

    const handlePress = (item) => { //This will trigger when a item is selected in the combo box (Not Custom Value)
        // console.log("handlePress")
        onValueChange(item);
        setSelectedItem(item);
        toggleComboBox();
        handleFocus(comboBoxRef);
    };

    const handleInputChange = (text) => { //This will trigger when input has changed in the custom value box
        // console.log("handleInputChange")
        setCustomValue(text); //Sets the current value
    };

    const handleInputSubmit = () => { //This will trigger when the submit button has been clicked for the custom value
        // console.log("handleInputSubmit")
        onValueChange(customValue);
        setSelectedItem(customValue);
        toggleComboBox();
        handleFocus(comboBoxRef);

    };

    return (
        <View style={styles.container}>
            <Text importantForAccessibility='no' accessible={false} style={{ color: theme.comboBox.title }}>{title}</Text>
            <TouchableOpacity
                ref={comboBoxRef}
                onPress={toggleComboBox}
                style={[styles.input, { backgroundColor: theme.comboBox.selectedBackgroundColor }]}
                accessibilityRole="combobox"
                accessibilityState={{
                    expanded: isComboBoxOpen,
                }}
                accessibilityLabel={selectedItem}
            >
                <Text style={{ color: theme.comboBox.selectedText }}>{selectedItem}</Text>
            </TouchableOpacity>
            {isComboBoxOpen && (
                <View style={styles.comboBoxContainer}>
                    {/* Custom Value Input */}
                    <TextInput
                        style={[styles.inputField, { color: theme.comboBox.itemText }]}
                        placeholderTextColor={theme.comboBox.placeholderText}
                        placeholder={`Custom Value`}
                        value={customValue}
                        onChangeText={handleInputChange} //When the value changes for the text field
                        onSubmitEditing={() => { //on submit
                            if (customValue.trim() !== '') {
                                handleInputSubmit();
                            }
                        }}
                        accessibilityHint={`1 of ${data.length + 1}`}
                    />
                    {/* List of Options */}
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => handlePress(item)} style={{ backgroundColor: theme.comboBox.listBackgroundColor, borderWidth: 1, borderColor: theme.comboBox.borderColor }}>
                                <Text style={[styles.comboBoxItem, { color: theme.comboBox.itemText }]} accessibilityLabel={`${item}, ${index + 2} of ${data.length + 1}`}>{item}</Text>
                            </TouchableOpacity>
                        )}
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
    comboBoxContainer: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    comboBoxItem: {
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

export default ComboBox;
