import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AccessibilityInfo, ScrollView } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//EXAMPLE USE IN PAGE
//================================================
//This stores the Values of the Spin Button
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the Value for the value state (Shown above)
//NOTE each SpinButton needs its own unique handleValueChangeSpinButton and using its unique setSelectedValues
//--------------------------------
// const handleValueChangeSpinButton = (value) => {
//     setSelectedValues(value)
//   }
//--------------------------------

//Rendering the componenet
//-------------------------------
{/* <Text>{selectedValues}</Text>
<RadioButton data={data} title="Select an option" onValueChange={handleValueChangeSpinButton} /> */}
//-------------------------------

const SpinButton = ({ title, onValueChange }) => {

    //Theme Manangement
    //-----------------------------------------------
    const { theme } = useContext(themeContext);
    //-----------------------------------------------

    const [value, setValue] = useState(0);

    useEffect(() => {
        // This code will run after the state update is complete
        AccessibilityInfo.announceForAccessibility(`Current Value, ${value}`);
        onValueChange(value); 
      }, [value]); // Run this effect whenever `value` changes

    const incrementValue = () => {
        setValue(value + 1);
    };

    const decrementValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            <Text style={{color: theme.spinButton.title}}>{title}</Text>
            <View style={[styles.spinContainer, {backgroundColor: theme.spinButton.backgroundColor, borderColor: theme.spinButton.borderColor}]}>
            <TouchableOpacity onPress={decrementValue} style={[styles.button]} accessibilityRole='button'>
                <Text 
                    style={[styles.buttonText, {color: theme.spinButton.decrement}]}
                    accessibilityLabel='decrement'

                >
                    -
                </Text>
            </TouchableOpacity>
            <Text 
                style={[styles.input, {color: theme.spinButton.text}]}
                accessibilityLabel={`SpinButton Value, ${value}`}
            >
                {value.toString()}
            </Text>
            <TouchableOpacity 
                style={styles.button} accessibilityRole='button'
                onPress={incrementValue} 
            >
                <Text 
                    style={[styles.buttonText, {color: theme.spinButton.increment}]}
                    accessibilityLabel='Increment'
                >
                    +
                </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
    },
    input: {
        // flex: 1,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    button: {
        padding: 5,
    },
    buttonText: {
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
});

export default SpinButton;
