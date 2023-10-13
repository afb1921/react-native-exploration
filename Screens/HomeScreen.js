import React, { useRef, useContext, useState } from 'react';
import { View, Text, Image, AccessibilityInfo, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { useFocusEffect} from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

//Theme Managment Imports------------------------------------------
import themeContext from '../Themes/themeContext';
//-----------------------------------------------------------------

//Custom Imports---------------------------------------------------
import { colors, heading } from '../constant';
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
import ModalSelection from '../components/ModalSelection';
import VerticalTable from '../components/VerticalTable';
import HorizontalTable from '../components/HorizontalTable';
import TwoVariableTable from '../components/TwoVariableTable';
import OrderedList from '../components/OrderedList';
import UnorderedList from '../components/UnorderedList';
import TextField from '../components/TextField';
import ocean_video from '../assets/videos/oceanvideo.mp4';
import Videoplayer from '../components/Videoplayer';
import RadioButton from '../components/RadioButton';
import Accordion from '../components/Accordion';
import CheckBox from '../components/Checkbox';
import ProgressBar from '../components/ProgressBar';
import SpinButton from '../components/SpinButton';
import ComboBox from '../components/ComboBox';
import Dropdown from '../components/Dropdown';
import ExternalLinkButton from '../components/ExternalLinkButton';
//-----------------------------------------------------------------

function HomeScreen() {

  // const [selectedValues, setSelectedValues] = React.useState([]);

// const handleValueChangeCheckbox = (value) => {
//   setSelectedValues((prevSelectedValues) =>
//     prevSelectedValues.includes(value)
//       ? prevSelectedValues.filter((v) => v !== value) // Unselect if already selected
//       : [...prevSelectedValues, value] // Select if not already selected
//   );
// };

  // const [value, setValue] = useState(null);

  const handleChange = (value) => {

    // setValue(value);
  }


  const data = [
    'Apple',
    'Orange',
    'Banana',
    'Grapes',
    // Add more items here
  ];


  const dataList = [
    { label: 'Item 1', subItems: [] },
    {
      label: 'Item 2', subItems: [
        { label: 'Sub-Item 2.1', subItems: [] },
        {
          label: 'Sub-Item 2.2', subItems: [
            { label: 'Sub-Sub-Item 2.2.1', subItems: [] },
            { label: 'Sub-Sub-Item 2.2.2', subItems: [] },
          ]
        },
      ]
    },
    { label: 'Item 3', subItems: [] },
  ];


  const table_data1 = [
    {
      title: "Test Table",
      data: [
        { id: 'Students', col1: 'Alexa', col2: 'Sam', col3: 'Ben' },
        { id: 'Classes', col1: 'Math', col2: 'Science', col3: 'English' },
        // Add more rows here...
      ],
    },
    {
      title: "Test Tablea",
      data: [
        { id: 'Studentsa', col1: 'Alexaa', col2: 'Sama', col3: 'Bena' },
        { id: 'Classeas', col1: 'Matha', col2: 'Sciencea', col3: 'Englisha' },
        // Add more rows here...
      ],
    },
    {
      title: "Test Tablde",
      data: [
        { id: 'Students', col1: 'Alexa', col2: 'Sam', col3: 'Ben' },
        { id: 'Classes', col1: 'Math', col2: 'Science', col3: 'English' },
        // Add more rows here...
      ],
    },
  ];



  const table_data2 = {
    columns: ['Year 1', 'Year 2', 'Year 3', "Year 4", 'Year 5'],
    rows: [
      { label: 'Food 1', values: ['100', '20', "30", "022", "waw"] },
      { label: 'Food 2', values: ['5', '10', "15", "222", "Wdaw"] },
      { label: 'Food 3', values: ['1', '2', "3", "awaw", "aw"] },
    ],
  };

  //   //----------------------------


  //Theme Manangement-----------------------------------------------

  const { theme } = useContext(themeContext);

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
      }, delay)
    }, [])

  )


  return (
    <View style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>


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
        {/* <Text>{inputValue}</Text> */}
        {/* <TextField
          title="Hello world!"
          onValueChange={handleChange}
        /> */}
        {/* <Text>{value}</Text>

        <ModalSelection
           onValueChange={handleChange} 
           options={["Hello World", "Computer Science", "Python"]} 
           title="Modal Test Title"
         />  */}



        
          {/* <Text>{value}</Text> */}
          {/* <ComboBox
            title={"Select a fruit"}
            data={data}
            onValueChange={handleChange}
          /> */}
        

        {/* <View>
        <Text>{value}</Text>
        <Dropdown
            title={"Select a fruit"}
            data={data}
            onValueChange={handleChange}
          />
        </View> */}




      </View>




      <View>

        {/* <ExternalLinkButton url="https://reactnative.dev/docs/accessibility" label="React Native Accessibility Docs"/> */}




        {/* <Text>Selected Values: {selectedValues}</Text>
      <RadioButton data={data} title="Select an option" onValueChange={handleChange} /> */}

        {/* <Text>Selected Values: {selectedValues.join(', ')}</Text>
      <CheckBox data={data} title="Test" onValueChange={handleValueChangeCheckbox}/> */}

        {/* <Text>{selectedValues}</Text> */}
      {/* <SpinButton title="Test Title" onValueChange={handleChange}/> */}

     

        {/* <OrderedList data={dataList} numberingStyle="number" /> */}
        {/* <UnorderedList data={data}/> */}
        {/* <HorizontalTable data={table_data1}/>  */}
        {/* <VerticalTable data={table_data1} /> */}
        {/* <TwoVariableTable data={table_data2} title="ttt"/>  */}
   

        <Videoplayer video={ocean_video} videoName="ocean"/>

        {/* <Accordion
          title="Test Title" 
          collapsedData={
            <View>
              <Text>This is the collapsed data</Text>
            </View>
        }/> */}





      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },


  container2: {
    alignItems: 'center',
    justifyContent: 'center',
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },


});

export default HomeScreen;
