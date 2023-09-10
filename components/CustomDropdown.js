import React, { useState, useRef, useImperativeHandle, forwardRef, useContext, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';

import { colors } from "../constant.js"
import themeContext from '../Themes/themeContext';


// Example Use:
{/* <View>
    <CustomDropdown
        dropDownTitle="Hello world!"
        options={["O", "Y", "X"]} 
        ref={dropdownRef}
        accessible={true}
    />
</View> */}

// ----

const CustomDropdown = forwardRef(({ options, dropDownTitle }, ref) => {
    const { theme } = useContext(themeContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('None');
    const modalRef = useRef(null);
    const dropDownRef = useRef(null);

    useImperativeHandle(ref, () => ({
        openDropdown: () => setShowDropdown(true),
        closeDropdown: () => setShowDropdown(false),
        isOpen: () => showDropdown
    }));

    const handleOptionPress = (option, index) => {
        setSelectedValue(option);
        setShowDropdown(false);
        if (dropDownRef.current) {
            AccessibilityInfo.setAccessibilityFocus(dropDownRef.current._nativeTag);
        }
    };

    const handleModalClose = () => {
        setShowDropdown(false);
        if (dropDownRef.current) {
            AccessibilityInfo.setAccessibilityFocus(dropDownRef.current._nativeTag);
        }
    };

    const handleDropdownClick = () => setShowDropdown(true);

    const [maxButtonWidth, setMaxButtonWidth] = useState(0);

    useEffect(() => {
        let maxWidth = 0;
        const minWidth = 220; // You can adjust this value as needed
    
        options.forEach((option) => {
            const textWidth = measureTextWidth(option);
            maxWidth = Math.max(maxWidth, textWidth);
        });
    
        setMaxButtonWidth(Math.max(maxWidth, minWidth));
    }, [options]);
    
    const measureTextWidth = (text) => {
        const textWidth = text.length * 13; // You can adjust the factor as needed
        return textWidth;
    };

    
  

    return (
        <View>
            <View style={[styles.dropDownButton]}>

                {/* This section is for the dropdown button title */}
                <View 
                    style={styles.dropDownTitleContainer} 
                >
                    
                    <Text 
                        style={[styles.textContent, styles.centeredContent]}
                        accessible={false}
                        importantForAccessibility='no'
                    >
                        {dropDownTitle}
                    </Text>

                </View>
                {/* //---------------------------------------------- */}


                <TouchableOpacity 
                    onPress={handleDropdownClick} 
                    ref={dropDownRef} 
                    style={[styles.dropDownButtonContainer, styles.centeredContent]}
                    accessibilityLabel={`selected: ${selectedValue} for ${dropDownTitle} popup selection`}
                    accessibilityRole='button'
                >
                    <Text 
                        style={[styles.dropDownButtonText, styles.textContent, {paddingHorizontal: maxButtonWidth > 220 ? "" : 30}]} 
                        accessibilityLabel={`${selectedValue} selected`}
                    >
                        {selectedValue}
                    </Text>


                </TouchableOpacity>
            </View>




            <Modal visible={showDropdown} transparent={true} animationType='slide' onRequestClose={handleModalClose} ref={modalRef}>
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: theme.dropDownBackground }]}>
                        <View style={[styles.modalHeader, 
                                { backgroundColor: theme.modalHeaderColor, width: maxButtonWidth+20, }
                            
                            ]}>
                            <Text style={[styles.textContent, styles.modalHeaderText, { color: theme.modalHeaderText }]} role="heading">
                                Select your Option For:{'\n'}
                                <Text style={[styles.textContent, styles.modalHeaderText, { color: theme.modalHeaderText }]}>
                                    {dropDownTitle}
                                </Text>
                            </Text>
                        </View>


                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={option}
                                onPress={() => handleOptionPress(option, index)}
                                accessibilityLabel={`${option}, Item ${index + 1} of ${options.length}`}
                                accessibilityRole='menuitem'>

                                <View style={[styles.roundedTextContainer, 
                                    { 
                                        backgroundColor: (option === selectedValue) ? theme.dropDownFocusBackground : theme.dropDownTextBackground, 
                                        width: maxButtonWidth,
                                    }
                                    ]}>
                                    <Text style={[styles.textContent, styles.dropdownItem, { color: (option === selectedValue) ? theme.dropDownFocusText : theme.dropDownText }]}>
                                        {option}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}



                        <TouchableOpacity onPress={handleModalClose} style={styles.cancelButton}>
                            <Text style={[styles.textContent, { color: theme.dropDownText }]} role="button">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
});

const styles = StyleSheet.create({

    //Basic Style to style Text
    textContent: {
        fontWeight: "bold",
        fontSize: 18,

    },

    centeredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    //------------------------

    //Styles for Displaying OUTSIDE THE MODAL
    dropDownButton: {
        alignItems: 'center',
    },

    dropDownTitleContainer:{
        paddingVertical: 10,
    },
    dropDownButtonContainer: {
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "red",

    },
    dropDownButtonText: {
        color: "white"
    },
    //-------------------------------------


    //Styles for WHEN MODAL IS OPENED
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the entire screen
    },
    modalContent: {
        borderRadius: 10,
        alignItems: 'center',
        
    },
    modalHeader: {
        alignItems: "center",
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    modalHeaderText:{
        textAlign: 'center', // Center-align the text horizontally
        textAlignVertical: 'center', // Center-align the text vertically
    },
    roundedTextContainer: {
        marginVertical: 5,
        paddingVertical: 10,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        borderWidth: 2,
        justifyContent: 'center', // Center vertically
        alignItems: 'center',     // Center horizontally
        flexDirection: 'row',    // Added to allow multi-line text to be centered


    },
    dropdownItem: {
        alignItems: 'center',
    },
    cancelButton: {
        marginVertical: 10,
        alignItems: 'center',
    },



});


export default CustomDropdown;
