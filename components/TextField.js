import React, {useContext, useRef} from 'react';
import { View, TextInput, StyleSheet, Text, AccessibilityInfo, Platform } from 'react-native';

// Theme Management Imports
//================================================================
import themeContext from '../Themes/themeContext';
//================================================================

//EXAMPLE USE IN PAGE
//================================================
//This stores the selected Values of the Text Field
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the selected Values for the selected values state (Shown above)
//NOTE each text field needs its own unique handleChange and using its unique setSelectedValues
//--------------------------------
// const handleChange = (value) => {
//     setSelectedValues(value);
//   };
//--------------------------------

//Rendering the componenet
//-------------------------------
{/* <View>
    <Text>{inputValue}</Text>
        <TextField
          title="Hello world!"
          onValueChange={handleInputChange}
        />
</View> */}
//-------------------------------

const TextField = ({onValueChange, title}) => { //Give title and onValueChange, onValueChange will 
                                                  //trigger a function in the parent component to be triggered when a value is changed
  const { theme } = useContext(themeContext); //Theme context
  const textFieldRef = useRef(null); //Holds a ref to the text field


const onSubmitEditing = () => { //When a value is submitted on the text box
  if (Platform.OS === 'ios') {
    const delay = 250
    setTimeout(() => {
      const reactTag = textFieldRef.current._nativeTag;
      AccessibilityInfo.setAccessibilityFocus(reactTag);

    }, delay)
  }
}

  return (
    <View>
      <Text
        accessible={false}
        importantForAccessibility="no"
        style={[styles.title, { color: theme.textField.title }]}
      >
        {title}:
      </Text>
      <TextInput
        ref={textFieldRef}
        accessibilityHint={`for ${title}`}
        style={[styles.input, { color: theme.textField.text }]}
        onChangeText={(text) => {
          onValueChange(text); // Call the prop function with the updated text
        }}
        onSubmitEditing={(value) => {
            onSubmitEditing(value); // Call the provided function when return button is pressed
        
        }}
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
