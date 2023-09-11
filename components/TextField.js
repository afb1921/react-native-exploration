import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';


// Example Use:

// <View>
// <TextField
//   title="Hello world!"
//   placeholderText="Placeholder here..."
// />
// </View>

const TextField = ({inputValue, handleInputChange, placeholderText, title}) => {

    return(

        <View>
            <Text 
                accessible={false} 
                importantForAccessibility="no" 
                style={styles.title}>{title}:</Text>
            <TextInput
                accessibilityLabel={`${title}`}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="gray"
                onChangeText={handleInputChange}
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