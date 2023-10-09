// ExampleComponents.js
import React, { useRef, useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, AccessibilityInfo, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//Custom Imports
//============================================================================
import { heading, colors } from '../constant'
import HorizontalLine from '../components/HorizontalLine';
import VideoPlayer from '../components/Videoplayer';
import HorizontalTable from '../components/HorizontalTable';
import VerticalTable from '../components/VerticalTable';
import TwoVariableTable from '../components/TwoVariableTable';
import OrderedList from '../components/OrderedList';
import UnorderedList from '../components/UnorderedList';
import Accordion from '../components/Accordion';
import Checkbox from '../components/Checkbox';
import Dropdown from '../components/Dropdown';
import ComboBox from '../components/ComboBox';
import ModalSelection from '../components/ModalSelection';
import RadioButton from '../components/RadioButton';
import SpinButton from '../components/SpinButton';
import TextField from '../components/TextField';
//============================================================================

//Asset Imports
//================================================================
import dog_with_glasses from '../assets/images/dog_With_Glasses.jpg';
import ocean_video from '../assets/videos/oceanvideo.mp4';

//================================================================


//Theme Management Import
//================================================
import themeContext from '../Themes/themeContext';
//================================================


//Two Variable Table Data
//================================================================
const TwoVarData = {
  columns: ['Year 1', 'Year 2', 'Year 3'],
  rows: [
    { label: 'Food 1', values: ['100', '20', "30"] },
    { label: 'Food 2', values: ['5', '10', "15"] },
    { label: 'Food 3', values: ['1', '2', "3"] },
  ],
};
//===============================================================


//Vertical, Horizontal Table Data:
//================================================================
const table_data = [
  {
    title: "Test Table",
    data: [
      { id: 'Students', col1: 'Alex', col2: 'Sam', col3: 'Ben' },
      { id: 'Classes', col1: 'Math', col2: 'Science', col3: 'English' },
    ],
  },
];
//================================================================


//Ordered List Data
//================================================================
const orderedListData = [
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
//================================================================


//Unordered List Data
//================================================================
const data = [
  'Apple',
  'Orange',
  'Banana',
  'Grapefruit',
];
//================================================================


function ExampleComponents() {


  const [value, setValue] = useState(null);

  const handleChange = (value) => {
    setValue(value);
  }

  //Theme Manangement
  //===============================================================
  const { theme } = useContext(themeContext);
  //===============================================================

  // First Element Set Focus for Screen Reader & Reset Scroll View
  //===============================================================
  const firstElementRef = useRef(null);
  const scrollViewRef = useRef(null);

  //When the page loads (everytime) the useFocusEffect is triggered
  //This is used to bring focus on the first element

  useFocusEffect(
    React.useCallback(() => {

      console.log("use Focus Effect Example Components")

      //Reset Scroll View to the top of the page
      if (scrollViewRef.current) {
        console.log("Scroll")
        scrollViewRef.current.scrollTo({ y: 0 });
      }

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

    <ScrollView ref={scrollViewRef} style={[styles.container, { backgroundColor: theme.page.contentBackground }]}>

      <View>
        {/* // heading.Heading is a custom heading style set in constant.js */}
        {/* //first Element set here -------------------------------------------*/}

        <View style={styles.containerHeader}>
          <heading.Heading1 //Heading 1
            ref={firstElementRef}
            style={styles.containerHeaderText}
            accessibilityLabel="Example Components"
          >
            Example Components
          </heading.Heading1>
        </View>

        <View style={styles.imageSectionContainer}>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Image Example"
          >
            Image Example
          </heading.Heading2>
          <Image
            source={dog_with_glasses}
            style={styles.imageStyle}
            accessibilityLabel='A Labrador Retriever wearing sun glasses'
            accessible={true}
            accessibilityRole='image'
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Example Video"
          >

            Example Video
          </heading.Heading2>
          <VideoPlayer video={ocean_video} videoName="ocean" />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Example Tables"
          >
            Example Tables
          </heading.Heading2>

          <View style={styles.tableContainer}>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Horizontal Table Example"
            >
              Horizontal Table Example
            </heading.Heading3>
            <HorizontalTable data={table_data} />
          </View>

          <View style={styles.tableContainer}>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Vertical Table Example"
            >
              Vertical Table Example
            </heading.Heading3>
            <VerticalTable data={table_data} />
          </View>

          <View style={styles.tableContainer}>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Two Variable Table Example"
            >
              Two Variable Table Example
            </heading.Heading3>

            <TwoVariableTable data={TwoVarData} title="Year" />
          </View>
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Example Lists"
          >
            Example Lists
          </heading.Heading2>


          <View>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Unordered List Example"
            >
              Unordered List
            </heading.Heading3>
            <UnorderedList data={data} />
          </View>


          <View>
            <heading.Heading3 //Heading 3
              style={[styles.heading3, { color: theme.page.text }]}
              accessibilityLabel="Ordered List Example"
            >
              Ordered List Example
            </heading.Heading3>
            <OrderedList data={orderedListData} />
          </View>
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Accordion Example"
          >
            Accordion Example
          </heading.Heading2>

          <Accordion
            title="Test Accordion"
            collapsedData={
              <View>
                <Text>This is the collapsed data</Text>
              </View>
            }
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Modal Selection Example"
          >
            Modal Selection Example
          </heading.Heading2>

          <ModalSelection
            title="Test Accordion"
            options={["Apple", "Orange", "Banana"]}
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Dropdown Example"
          >
            Dropdown Example
          </heading.Heading2>

          <Dropdown
            title={"Select a item"}
            data={data}
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Combo Box Example"
          >
            Combo Box Example
          </heading.Heading2>

          <ComboBox
            title={"Select a item"}
            data={data}
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="CheckBox Example"
          >
            Check Box Example
          </heading.Heading2>

          <Checkbox
            title={"Select a item"}
            data={data}
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Radio Button Example"
          >
            Radio Button Example
          </heading.Heading2>

          <RadioButton
            title={"Select a item"}
            data={data}
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Text Field Example"
          >
            Text Field Example
          </heading.Heading2>

          <TextField
            title="Input a Value!"
            onValueChange={handleChange}
          />
        </View>

        <HorizontalLine />

        <View>
          <heading.Heading2 //Heading 2
            style={[styles.heading2, { color: theme.page.text }]}
            accessibilityLabel="Spin Button Example"
          >
            Spin Button Example
          </heading.Heading2>

          <SpinButton
            title="Enter Amount"
            onValueChange={handleChange}
          />
        </View>

      </View>

    </ScrollView>



  );
}

const styles = StyleSheet.create({
  //Header Styles relating to "Example Components"
  //================================================
  containerHeader: {
    alignItems: 'center', //Aligns content horizontally center
    backgroundColor: colors.primaryBlue,
    paddingTop: 10,
  },
  containerHeaderText: {
    color: "white",
  },
  //================================================

  //General Styles
  //================================================ 
  textContent: {        //This style is general text style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  heading2: {        //Heading 2 style
    paddingTop: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  heading3: {        //Heading 3 style
    paddingTop: 1,
    paddingBottom: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //================================================

  //Image section Styles
  //================================================
  imageSectionContainer: {
    alignItems: 'center', //Aligns content horizontally center
  },

  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
  },

  //================================================

  //Tables
  //================================================
  tableContainer: {
    marginVertical: 20,

  },
  //================================================



});

export default ExampleComponents;
