import React from 'react';
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
{/* <Text>Selected Values: {selectedValues.join(', ')}</Text>
<CheckBox data={data} title="Test" onValueChange={handleValueChangeCheckbox}/> */}
//-------------------------------

const CustomCheckBox = ({ data, title, onValueChange }) => {

  //For Theme Management
    //================================
    const { theme } = React.useContext(themeContext);
    //================================

  const [checkboxStates, setCheckboxStates] = React.useState(data.map(() => false));

  const toggleCheckbox = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      accessibilityRole='list'

      renderItem={({ item, index }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <CheckBox
            disabled={false}
            value={checkboxStates[index]}
            onValueChange={() => {toggleCheckbox(index); onValueChange(item);}}
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
  );
};

export default CustomCheckBox;


