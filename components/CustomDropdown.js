//Custom Drop Down Menu with Accessibility in Mind
//TalkBack Tested on a Note 20 Ultra (8/24/23)

import React, { useState, useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';

const CustomDropdown = forwardRef(({ options}, ref) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const [selectedValue, setSelectedValue] = useState('None');

    const modalRef = useRef(null);
    const dropDownRef = useRef(null);

     useImperativeHandle(ref, () => ({ //ACCES FROM PARENT REF
        openDropdown: () => {
            setShowDropdown(true);
        },
        closeDropdown: () => {
            setShowDropdown(false);
        },
        
        isOpen: () => showDropdown

    }));

    const handleOptionPress = (option, index) => { //ON OPTION SELECT
        setSelectedValue(option);
        setShowDropdown(false);
        console.log(`Selected Option: ${option}, Index: ${index}`);
        // onModalClose();

        if (dropDownRef.current) {
            reactTag = dropDownRef.current._nativeTag;
            AccessibilityInfo.setAccessibilityFocus(reactTag);
        }

    };


    const handleModalClose = () => { //ON CLOSE
        setShowDropdown(false);
        // onModalClose();
        if (dropDownRef.current) {
            reactTag = dropDownRef.current._nativeTag;
            AccessibilityInfo.setAccessibilityFocus(reactTag);
        }   
    };


    const handleDropdownClick = () => { //on OPEN
        setShowDropdown(true);
    };

    return (
        <View >
            <TouchableOpacity 
                onPress={handleDropdownClick}
                ref={dropDownRef}
            >
                <Text
                    accessibilityLabel={`${selectedValue} selected`}
                >
                    {selectedValue}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={showDropdown}
                transparent={true}
                animationType='slide'
                onRequestClose={handleModalClose}
                ref={modalRef}
            >

                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text importantForAccessibility='no'>Select your Option</Text>

                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={option}
                                onPress={() => handleOptionPress(option, index)}
                                accessibilityLabel={`${option}, Item ${index + 1} of ${options.length}`}
                                accessibilityRole='menuitem'
                                style={styles.dropdownItem}

                            >
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity onPress={handleModalClose} style={styles.cancelButton}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Modal>
        </View>
    );
});

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the entire screen
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%', // Adjust the width as needed
    },
    cancelButton: {
        marginTop: 10,
        alignItems: 'center',
    },
});


export default CustomDropdown;
