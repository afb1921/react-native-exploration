import React, { useState, useRef, useImperativeHandle, forwardRef, useContext, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';

//Custom Imports
//==================================================
import { colors } from "../constant.js"
//==================================================

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================


// Example Use: using the component
//==================================
{/* <View>
    <CustomDropdown
        title="Hello world!"
        options={["O", "Y", "X"]} 
        ref={dropdownRef}
        accessible={true}
    />
</View> */}
//==================================

const CustomDropdown = forwardRef(({ options, title }, ref) => {

    //For Theme Management
    //================================
    const { theme } = useContext(themeContext);
    //================================

    const [showDropdown, setShowDropdown] = useState(false); //This set the state of the dropdown if it should be shown or not
    const [selectedValue, setSelectedValue] = useState('None'); //The current selected value
    const modalRef = useRef(null);
    const dropDownRef = useRef(null);
    const handleDropdownClick = () => setShowDropdown(true); //Opens the dropdown when the dropdown is clicked button is clicked

    //================================

    //This hook is used to expose custom methods (openDropdown, closeDropdown, and isOpen) 
    //to the parent component through the ref prop. These methods allow you to control the 
    //dropdown programmatically.

    useImperativeHandle(ref, () => ({
        openDropdown: () => setShowDropdown(true),
        closeDropdown: () => setShowDropdown(false),
        isOpen: () => showDropdown
    }));

    //================================

    const handleOptionPress = (option, index) => { //Sets the selected option then closes the dropdown
        setSelectedValue(option);
        setShowDropdown(false);
        if (dropDownRef.current) {
            AccessibilityInfo.setAccessibilityFocus(dropDownRef.current._nativeTag);
        }
    };

    const handleModalClose = () => { //Closes the dropdown when the modal is closed
        setShowDropdown(false);
        if (dropDownRef.current) {
            AccessibilityInfo.setAccessibilityFocus(dropDownRef.current._nativeTag);
        }
    };

    //Text Width Calcuation
    //==================================================
    const [maxButtonWidth, setMaxButtonWidth] = useState(0);

    useEffect(() => {
        let maxWidth = 0;
        const minWidth = 220; 
    
        options.forEach((option) => {
            const textWidth = measureTextWidth(option);
            maxWidth = Math.max(maxWidth, textWidth);
        });
    
        setMaxButtonWidth(Math.max(maxWidth, minWidth));
    }, [options]);
    
    const measureTextWidth = (text) => {
        const textWidth = text.length * 13; 
        return textWidth;
    };
    //=================================================

    return (
        <View>
            <View style={[styles.dropDownButton]}>

                {/* This section is for the modal button title (displayed above modal button) */}
                {/* //================================================ */}
                <View 
                    style={styles.dropDownTitleContainer} 
                >
                    <Text 
                        style={[styles.textContent, styles.centeredContent, {color: theme.text}]}
                        accessible={false}
                        importantForAccessibility='no'
                    >
                        {title}
                    </Text>

                </View>
                {/* //============================================*/}


                {/* //The modal button ============*/}
                <TouchableOpacity 
                    onPress={handleDropdownClick} 
                    ref={dropDownRef} 
                    style={[styles.dropDownButtonContainer, styles.centeredContent, {backgroundColor: theme.button}]}
                    accessibilityLabel={`selected: ${selectedValue} for ${title} popup selection`}
                    accessibilityRole='button'
                >
                    <Text 
                        style={[styles.textContent, {paddingHorizontal: maxButtonWidth > 220 ? "" : 30, color: theme.buttonText}]} 
                        accessibilityLabel={`${selectedValue} selected`}
                    >
                        {selectedValue}
                    </Text>
                </TouchableOpacity>
                {/* //============================ */}
            </View>

            {/* //This is the modal popup displayed when the button is clicked
            ============================================================ */}
            <Modal visible={showDropdown} transparent={true} animationType='slide' onRequestClose={handleModalClose} ref={modalRef}>
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: theme.modal}]}>
                        <View style={[styles.modalHeader, 
                                { backgroundColor: theme.modalHeader, width: maxButtonWidth+20, }
                            
                            ]}>
                            <Text style={[styles.textContent, styles.modalHeaderText, { color: theme.modalHeaderText }]} role="heading">
                                Select your Option For:{'\n'}
                                <Text style={[styles.textContent, styles.modalHeaderText, { color: theme.modalHeaderText }]}>
                                    {title}
                                </Text>
                            </Text>
                        </View>


                        {options.map((option, index) => ( //For every option
                            <TouchableOpacity
                                key={option}
                                onPress={() => handleOptionPress(option, index)}
                                accessibilityLabel={`${option}, Item ${index + 1} of ${options.length}`}
                                accessibilityRole='menuitem'>

                                <View style={[styles.roundedTextContainer, 
                                    { 
                                        backgroundColor: (option === selectedValue) ? theme.modalSelectedItem : theme.modalNonselectedItem, 
                                        width: maxButtonWidth,
                                    }
                                    ]}>
                                    <Text style={[styles.textContent, styles.dropdownItem, { color: (option === selectedValue) ? theme.modalSelectedItemText : theme.modalItemText }]}>
                                        {option}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}


                        {/* This is the cancel button */}
                        {/* =============================== */}
                        <TouchableOpacity onPress={handleModalClose} style={styles.cancelButton}>
                            <Text style={[styles.textContent, { color: theme.modalItemText}]} role="button">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        {/* ============================== */}


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
