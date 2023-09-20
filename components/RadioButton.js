import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

// const data = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     // Add more items here
//   ];

const CustomRadioButton = ({data}) => {
    const [selectedItem, setSelectedItem] = useState(null);


    return (
        <View>
            {data.map((item, index) => (

            <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}> 
                <RadioButton.Android
                    accessibilityLabel={`${item}`}
                    value={item}
                    status={selectedItem === item ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedItem(item)}
                />
                <Text 
                    importantForAccessibility='no' 
                    accessible={false}
                >
                    {item}
                </Text>
            </View>
    
            ))}

        </View>

    );

  };
  
  export default CustomRadioButton;
  