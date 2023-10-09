import React, { useState, useContext } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================

const CustomRadioButton = ({ data, title, onValueChange }) => {
    // For Theme Management
    // ================================
    const { theme } = useContext(themeContext);
    // ================================

    const [selectedItem, setSelectedItem] = useState(null); // Sets the selected item

    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: theme.spinButton.title }}>{title}</Text>
                <FlatList
                    accessibilityRole={"list"}
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    renderItem={({ item, index }) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton.Android
                                accessibilityLabel={
                                    data.length > 1
                                        ? `${item}, ${index + 1} of ${data.length}`
                                        : `${item}`
                                }
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default CustomRadioButton;
