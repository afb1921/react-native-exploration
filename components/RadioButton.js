import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================

// const data = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     // Add more items here
//   ];

const CustomRadioButton = ({data, title}) => {

    //For Theme Management
    //================================
    const { theme } = React.useContext(themeContext);
    //================================

    const [selectedItem, setSelectedItem] = React.useState(null);


    return (
        <FlatList 
            accessibilityRole={"list"}
            keyExtractor={(item, index) => index.toString()}
            data={data}
        
            renderItem={({ item, index }) => (

                <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}> 
                    <RadioButton.Android
                        accessibilityLabel={(data.length > 1) ? `${item}, ${index+1} of ${data.length}` : `${item}`}
                        value={item}
                        status={selectedItem === item ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedItem(item)}
                    />
                    <Text 
                        importantForAccessibility='no' 
                        accessible={false}
                        style={{color: theme.radioButton.text}}
                    >
                        {item}
                    </Text>
                </View>
    
            )}

        />

    );

  };
  
  export default CustomRadioButton;
  
