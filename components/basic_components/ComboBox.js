import React, { useContext, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, AccessibilityInfo, Platform, ScrollView } from 'react-native';

//Theme Import
//================================================
import themeContext from '../../Themes/themeContext';
//================================================

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
    <Text>{selectedValues}</Text> //This will display the value ensure its styled
    <ComboBox
        title={"Select a fruit"}
        data={data}
        onValueChange={handleChange}
    />
</View> */}
//-------------------------------

const ComboBox = ({ data, onValueChange, title }) => {
    const { theme } = useContext(themeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [customValue, setCustomValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('none');
    const comboBoxRef = useRef(null);

    const handleFocus = (ref) => {
        if (Platform.OS === 'ios') {
            const delay = 250;
            setTimeout(() => {
                AccessibilityInfo.setAccessibilityFocus(ref.current._nativeTag);
            }, delay);
        } else {
            AccessibilityInfo.setAccessibilityFocus(ref.current._nativeTag);
        }
    }

    const toggleComboBox = () => {
        setIsOpen(!isOpen);
    };

    const handlePress = (item) => {
        setSelectedItem(item);
        onValueChange(item);
        toggleComboBox();
        handleFocus(comboBoxRef);
    };

    const handleInputChange = (text) => {
        setCustomValue(text);
    };

    const handleInputSubmit = () => {
        if (customValue.trim() !== '') {
            setSelectedItem(customValue);
            onValueChange(customValue);
            toggleComboBox();
            handleFocus(comboBoxRef);
        }
    };


    const isComboBoxExpanded = isOpen;

    return (
        <ScrollView style={styles.container}>
            <Text importantForAccessibility='no' accessible={false} style={{ color: theme.comboBox.title }}>{title}</Text>
            <TouchableOpacity
                ref={comboBoxRef}
                onPress={toggleComboBox}
                style={[styles.input, { backgroundColor: theme.comboBox.selectedBackgroundColor }]}
                accessibilityRole="button"
                accessibilityHint={`${title} ComboBox`}
                accessibilityState={{
                    expanded: isComboBoxExpanded,
                }}
                accessibilityLabel={selectedItem}
            >
                <Text style={{ color: theme.comboBox.selectedText }}>{selectedItem}</Text>
            </TouchableOpacity>
            {isOpen && (
                <ScrollView style={{ width: '100%' }} horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.itemContainer}>
                        <View>
                            <TextInput
                                style={[styles.inputField, { color: theme.comboBox.itemText }]}
                                placeholderTextColor={theme.comboBox.placeholderText}
                                placeholder={`Custom Value`}
                                value={customValue}
                                onChangeText={handleInputChange}
                                onSubmitEditing={handleInputSubmit}
                                accessibilityHint={`1 of ${data.length + 1}`}
                            />
                        </View>
                        <View>
                            <FlatList
                                data={[...data]}
                                keyExtractor={(item) => item.toString()}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={() => handlePress(item)} style={{ backgroundColor: theme.comboBox.listBackgroundColor, borderWidth: 1, borderColor: theme.comboBox.borderColor }}>
                                        <Text style={[styles.comboBoxItem, { color: theme.comboBox.itemText }]} accessibilityLabel={`${item}, ${index + 2} of ${data.length + 1}`}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
            )}
        </ScrollView>
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
    comboBoxItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemContainer: {
        flex: 1,
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
});

export default ComboBox;
