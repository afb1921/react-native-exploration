import React, { useContext } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//EXAMPLE USE IN PAGE
//================================================
//This stores the input Value of the textField
//--------------------------------
// const [inputValue, setInputValue] = React.useState('');
//--------------------------------

//This handles updating the input Value for the inputValue state (Shown above)
//NOTE each TextField needs its own unique handleInputChange and using its unique setInputValue
//--------------------------------
// const handleInputChange = (value) => {
//     setInputValue(value);

//   }
//--------------------------------

//Rendering the componenet
//-------------------------------
{/* <View>
    <Text>{inputValue}</Text> //Make sure to style the text
    <TextField
        title="This is a test title"
        onValueChange={handleInputChange}
        inputValue={inputValue} 
    />
</View> */}
//-------------------------------

const TextField = ({ inputValue, onValueChange, title }) => {

    //Theme Manangement
    //----------------------------------------------
    const { theme } = useContext(themeContext);
    //----------------------------------------------

    return (

        <View>
            <Text
                accessible={false}
                importantForAccessibility="no"
                style={[styles.title, { color: theme.textField.title }]}>{title}:</Text>
            <TextInput
                accessibilityHint={`for ${title}`}
                style={[styles.input, { color: theme.textField.text }]}
                onChangeText={(text) => {
                    onValueChange(text); // Call the prop function with the updated text
                }}
                value={inputValue}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
});

export default TextField;