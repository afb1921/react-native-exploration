import React, { useRef, useContext, useEffect, useState} from 'react';
import {View, Text, Image, AccessibilityInfo, StyleSheet, SectionList} from 'react-native';
import { useFocusEffect, useRoute} from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';


//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors, heading } from '../constant';
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
import CustomDropdown from '../components/CustomDropdown';
import VerticalTable from '../components/VerticalTable';
import HorizontalTable from '../components/HorizontalTable';
import TwoVariableTable from '../components/TwoVariableTable';

//-----------------------------------------------------------------

function HomeScreen() {

  const dataTable = [
        {
            title: 'Test',
            data: [
                { id: 'History', col1: 'Data 1', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2'},
                { id: 'Math', col1: 'Data 2', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
                { id: 'English', col1: 'Data 3', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
                { id: 'Science', col1: 'Data 4', col2: 'Data 2', col3: 'Value 1', col4: 'Value 2' },
            ],
        },
    ];



    const data = {
      columns: ['Year 1', 'Year 2', 'Year 3'],
      rows: [
          { label: 'Food 1', values: ['10', '20', "30"] },
          { label: 'Food 2', values: ['5', '10', '15'] },
          { label: 'Food 3', values: ['1', '2', "3"] },
      ],
  };


 
  
  

  //Theme Manangement-----------------------------------------------
 
  const { theme} = useContext(themeContext);

  const dropdownRef = useRef(null)

  //----------------------------------------------------------------


  // Focus Managment 
  //---------------------------------------------------------------
  const firstElementRef = useRef(null);
  //----------------------------------------------------------------

  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element
  useFocusEffect( 
    React.useCallback(() => {

    console.log("use Focus Effect Home")
 
    // // Add a time delay before executing the focus logic, 
    // //This is important so the it gives it a chance to find the firstElement during loading.
    const delay = 250; // Delay in milliseconds

     setTimeout(() => {
            
      if (firstElementRef.current) {
        const reactTag = firstElementRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        console.log('First Element===========n\n'); //Debuging purposes

      }
    },delay)
    },[])

  )
  

  return (
    <View style={[styles.container, { backgroundColor: theme.contentBackground }]}>


      {/* //first Element set here -------------------------------------------*/}
      {/* // heading.Heading is a custom heading style set in constant.js */}

      <View style={styles.containerHeader}>
        <heading.Heading1
          ref={firstElementRef} //First Element For Focus set here!
          style={styles.containerHeaderText}
          accessible={true}
          accessibilityLabel="Home Screen"
          accessibilityRole="header"
        >
          Home Screen
        </heading.Heading1>
      </View>
      {/* // -----------------------------------------------------------------*/}

      <View>
        <CustomDropdown
          dropDownTitle="This is a Test Title!"
          options={["O", "Y", "X"]} 
          ref={dropdownRef}
        />
      </View>

      <View>

      <VerticalTable
        data={dataTable}
      /> 

      {/* <HorizontalTable
        data={dataTable}
      />  */}



      {/* <TwoVariableTable data={data} /> */}



      



      


      </View>







    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
    
  },
  containerHeaderText: {
    color: "white",
  },
  iconContainer: {
    alignItems: 'center',
  },
  contentColor: {
  },



  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
  },

});

export default HomeScreen;
