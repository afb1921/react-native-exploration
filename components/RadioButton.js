import React, {useState, useContext} from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================

//EXAMPLE USE IN PAGE
//================================================
//This stores the selected Values of the Radio Button
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the selected Value for the selected value state (Shown above)
//NOTE each RadioButton needs its own unique handleChange and using its unique setSelectedValues
//--------------------------------
// const handleChange = (value) => {
//     setSelectedValues(value)
//   }
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
{/* <Text>Selected Values: {selectedValues}</Text> //Make sure to style the text
<RadioButton data={data} title="Select an option" onValueChange={handleValueChangeRadio} /> */}
//-------------------------------


const CustomRadioButton = ({ data, title, onValueChange }) => {

    //For Theme Management
    //================================
    const { theme } = useContext(themeContext);
    //================================

    const [selectedItem, setSelectedItem] = useState(null);  //Sets the selected item

    return (
        <View>
            <Text style={{ color: theme.spinButton.title }}>{title}</Text>
            <FlatList
                accessibilityRole={"list"}
                keyExtractor={(item, index) => index.toString()}
                data={data}

                renderItem={({ item, index }) => (

                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton.Android
                            accessibilityLabel={(data.length > 1) ? `${item}, ${index + 1} of ${data.length}` : `${item}`}
                            value={item}
                            status={selectedItem === item ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setSelectedItem(item);
                                onValueChange(item);
                            }}

                            color={theme.radioButton.selectedColor}
                            uncheckedColor={theme.radioButton.unselectedColor}
                        />
                        <Text
                            importantForAccessibility='no'
                            accessible={false}
                            style={{ color: theme.radioButton.text }}
                        >
                            {item}
                        </Text>
                    </View>

                )}

            />
        </View>

    );

};

export default CustomRadioButton;

