import React, { useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import CheckBox from 'expo-checkbox';

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================

//EXAMPLE USE IN PAGE
//================================================
//This stores the selected Values of the checkbox
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the selected Values for the selected values state (Shown above)
//NOTE each checkbox needs its own unique handleValueChangeCheckbox and using its unique setSelectedValues
//--------------------------------
// const handleValueChangeCheckbox = (value) => {
//   setSelectedValues((prevSelectedValues) =>
//     prevSelectedValues.includes(value)
//       ? prevSelectedValues.filter((v) => v !== value) // Unselect if already selected
//       : [...prevSelectedValues, value] // Select if not already selected
//   );
// };
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
{/* <Text>Selected Values: {selectedValues.join(', ')}</Text> //Make sure to style the text
<CheckBox data={data} title="Test" onValueChange={handleValueChangeCheckbox}/> */}
//-------------------------------

const CustomCheckBox = ({ data, title, onValueChange }) => { //Give data, title, and onValueChange prop, data is the array of values for the checkbox, 
                                                              //onValueChange is a function that can be called by the parent when a value changes

  //For Theme Management
  //================================
  const { theme } = useContext(themeContext);
  //================================

  const [checkboxStates, setCheckboxStates] = useState(data.map(() => false)); //Sets the state of each checkbox, it will initialize each state to be false

  const toggleCheckbox = (index) => { //When the checkbox state changes this will set the checkbox state
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <View>
      <Text style={{ color: theme.checkBox.title }}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()} //the index of the item is the key
        accessibilityRole='list'
        renderItem={({ item, index }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
            <CheckBox
              disabled={false} //This allows the user to interact with the checkbox. (Setting to true will make the checkbox usable by the user)
              value={checkboxStates[index]}
              onValueChange={() => { toggleCheckbox(index); onValueChange(item); }} //When a value is changed it will trigger toggleCheckbox and onValueChange
              accessibilityLabel={(data.length > 1) ? `${item}, ${index + 1} of ${data.length}` : `${item}`}
              color={checkboxStates[index] ? theme.checkBox.color : theme.checkBox.uncheckedColor}

            />
            <Text
              importantForAccessibility='no'
              accessible={false}
              style={{ marginLeft: 10, color: theme.checkBox.text }}>
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomCheckBox;


