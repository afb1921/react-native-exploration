import React, { useRef, useContext, useEffect, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, AccessibilityInfo } from 'react-native';

//Custom Imports
//==================================================
import { colors } from "../../constant.js"
//==================================================

//Theme Imports
//==================================================
import themeContext from '../../Themes/themeContext.js';
//==================================================

//EXAMPLE USE IN PAGE
//================================================
//This stores the selected Values of the Modal Selection
//--------------------------------
// const [selectedValues, setSelectedValues] = React.useState([]);
//--------------------------------

//This handles updating the selected Values for the selected values state (Shown above)
//NOTE each modal Selection needs its own unique handleChange and using its unique setSelectedValues
//--------------------------------
// const handleChange = (value) => {
//     setSelectedValues(value);
//   };
//--------------------------------


// Example Use: using the component
//==================================
{/* <View>

    <Text>{selectedValues}</Text> //The selected value(s) will be displayed using this text ensure its styled properly
    
    <ModalSelection
        onValueChange={selectedValues}
        title="Hello world!"
        options={["O", "Y", "X"]} 
    />
</View> */}
//==================================

const ModalSelection = ({ options, title, onValueChange }) => {

    //For Theme Management
    //================================
    const { theme } = useContext(themeContext);
    //================================

    const [showModal, setShowModal] = useState(false); //This set the state of the modal if it should be shown or not
    const [selectedValue, setSelectedValue] = useState('None'); //The current selected value
    const modalRef = useRef(null); //This is a ref for the modal
    const selectedRef = useRef(null); //This is a ref for the selected value
    const handleModalClick = () => setShowModal(true); //Opens the modal when button clicked

    const handleOptionPress = (option, index) => { //Sets the selected option then closes the modal
        setSelectedValue(option);
        setShowModal(false);

        if (Platform.OS === 'ios') { //Re focus to the modal when a item has been selected (for IOS)
            const delay = 250
            setTimeout(() => {
                if (modalRef.current) {
                    AccessibilityInfo.setAccessibilityFocus(modalRef.current._nativeTag);
                }
            }, delay)
        }
    }
        
    const handleModalClose = () => { //Closes the modal
        setShowModal(false);
        if (modalRef.current) {
            AccessibilityInfo.setAccessibilityFocus(modalRef.current._nativeTag);
        }
    };

    //Text Width Calcuation
    //==================================================
    const [maxButtonWidth, setMaxButtonWidth] = React.useState(0);

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
            <View style={[styles.modalButton]}>

                {/* This section is for the modal button title (displayed above modal button) */}
                {/* //================================================ */}
                <View 
                    style={styles.modalTitleContainer} 
                >
                    <Text 
                        style={[styles.textContent, styles.centeredContent, {color: theme.page.text}]}
                        accessible={false}
                        importantForAccessibility='no'
                    >
                        {title}
                    </Text>

                </View>
                {/* //============================================*/}


                {/* //The modal button ============*/}
                <TouchableOpacity 
                    onPress={handleModalClick} 
                    ref={modalRef} 
                    style={[styles.modalButtonContainer, styles.centeredContent, {backgroundColor: theme.button.color}]}
                    accessibilityLabel={`selected: ${selectedValue} for ${title}`}
                    accessibilityRole='spinbutton'
                >
                    <Text 
                        style={[styles.textContent, {paddingHorizontal: maxButtonWidth > 220 ? "" : 30, color: theme.button.text}]} 
                        accessibilityLabel={`${selectedValue} selected`}
                    >
                        {selectedValue}
                    </Text>
                </TouchableOpacity>
                {/* //============================ */}
            </View>

            {/* //This is the modal popup displayed when the button is clicked
            ============================================================ */}
            <Modal visible={showModal} transparent={true} animationType='slide' onRequestClose={handleModalClose} ref={selectedRef} accessibilityViewIsModal={true}>
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: theme.modal.background}]}>
                        <View style={[styles.modalHeader, 
                                { backgroundColor: theme.modal.header, width: maxButtonWidth+20, }
                            
                            ]}>
                            <Text style={[styles.textContent, styles.modalHeaderText, { color: theme.modal.headerText }]} role="heading">
                                Select your Option For:{'\n'}
                                <Text style={[styles.textContent, styles.modalHeaderText, { color: theme.modal.headerText }]}>
                                    {title}
                                </Text>
                            </Text>
                        </View>


                        {options.map((option, index) => ( //For every option
                            <TouchableOpacity
                                key={option}
                                onPress={() => {handleOptionPress(option, index), onValueChange(option)}}
                                accessibilityLabel={`${option}, Item ${index + 1} of ${options.length}`}
                                accessibilityRole='button'>

                                <View style={[styles.roundedTextContainer, 
                                    { 
                                        backgroundColor: (option === selectedValue) ? theme.modal.selectedItem : theme.modal.nonselectedItem, 
                                        width: maxButtonWidth,
                                    }
                                    ]}>
                                    <Text style={[styles.textContent, styles.dropdownItem, { color: (option === selectedValue) ? theme.modal.selectedItemText : theme.modal.itemText }]}>
                                        {option}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}


                        {/* This is the cancel button */}
                        {/* =============================== */}
                        <TouchableOpacity onPress={handleModalClose} style={styles.cancelButton} accessibilityRole='button'>
                            <Text style={[styles.textContent, { color: theme.modal.itemText}]} role="button">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        {/* ============================== */}


                    </View>
                </View>
            </Modal>
        </View>
    );
};

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
    modalButton: {
        alignItems: 'center',
    },

    modalTitleContainer:{
        paddingVertical: 10,
    },
    modalButtonContainer: {
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
    modalItem: {
        alignItems: 'center',
    },
    cancelButton: {
        marginVertical: 10,
        alignItems: 'center',
    },



});


export default ModalSelection;
