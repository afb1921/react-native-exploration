import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const SpinButton = ({ type }) => {
    const [value, setValue] = useState(0);

    const incrementValue = () => {
        setValue(value + 1);
    };

    const decrementValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={decrementValue} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.input}>
                {value.toString()}
            </Text>
            <TouchableOpacity onPress={incrementValue} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
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
