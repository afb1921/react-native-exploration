import React, { useContext, useState } from 'react';
import { View, Text, AccessibilityInfo, StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../constant'

//Theme Imports
//==================================================
import themeContext from '../../themes/themeContext';
//==================================================

//Example Use:
//================================================
{/* <Accordion
    title="Test Title"
    collapsedData={
        <View>
            <Text>This is the collapsed data</Text>
        </View>
    } 
/> */}
//================================================

const Accordion = ({ title, collapsedData }) => { //Give Title and collapsedData prop, collapseData is in a View like structure (shown on example use above)

    //For Theme Management
    //================================
    const { theme } = useContext(themeContext);
    //================================

    const [collapsed, setCollapsed] = useState(true); //Sets the current state of the accordion

    const toggleExpand = () => { //When the accordion is triggered it will check to see if its expanded or collapsed, then announce its state.
        if (collapsed == true) {
            AccessibilityInfo.announceForAccessibility("Expanded")
        }
        else if (collapsed == false) {
            AccessibilityInfo.announceForAccessibility("Collapsed")
        }
        setCollapsed(!collapsed); //This will set the collapsed state
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.accordion.background }]}
                onPress={toggleExpand} //toggleExpand will be called when accordion is pressed
                accessible={true}
                accessibilityLabel={title}
                accessibilityHint='accordion'
                accessibilityState={{ expanded: !collapsed }} //Sets the accessibility state of the accordion
            >
                <Text style={[styles.text, { color: theme.accordion.text }]}>
                    {title}
                </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}> 
                {collapsedData} 
            </Collapsible>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    button: {
        width: '100%', // Make the button span the entire width
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
    }
});


export default Accordion;