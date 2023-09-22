import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CheckBox from 'expo-checkbox';

const CustomCheckBox = ({ data, title }) => {
  const [checkboxStates, setCheckboxStates] = useState(data.map(() => false));

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
            onValueChange={() => toggleCheckbox(index)}
            accessibilityLabel={(data.length > 1) ? `${item}, ${index + 1} of ${data.length}` : `${item}`}
          />
          <Text importantForAccessibility='no' accessible={false} style={{ marginLeft: 10 }}>
            {item}
          </Text>
        </View>
      )}
    />
  );
};

export default CustomCheckBox;


