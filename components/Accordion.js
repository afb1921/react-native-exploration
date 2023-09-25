import React from 'react';
import { View, Text, AccessibilityInfo, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../constant'

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================

const Accordion = ({title, collapsedData}) => {

    //For Theme Management
    //================================
    const { theme } = React.useContext(themeContext);
    //================================

    const [collapsed, setCollapsed] = React.useState(true);

    const toggleExpand = () => {
        if(collapsed == true) {
            AccessibilityInfo.announceForAccessibility("Expanded Accordion")
        }
        else if(collapsed == false) {
            AccessibilityInfo.announceForAccessibility("Collapsed Accordion")
        }
        setCollapsed(!collapsed);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: theme.accordion.background}]}
                onPress={toggleExpand}
                accessible={true}
                accessibilityLabel={title}
                accessibilityHint='accordion'
                accessibilityState={{ expanded: !collapsed }}
            >
                <Text style={[styles.text, {color: theme.accordion.text}]}>
                    {title}
                </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
                {collapsedData}
            </Collapsible>
        </View>

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