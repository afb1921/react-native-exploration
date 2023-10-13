//Default Themes (Light and Dark)

import { colors} from '../constant';

export const darkMode = {

    theme: 'dark',

    drawer:{
    //Drawer Colors (& three styles)
    //================================================
    //-----------------------------------------------
        //These are all used in './components/DrawerContent.js'
    //------------------------------------------------
        header: colors.brightBlue, // (backgroundColor) Color for drawer header
        headerText: 'white', // (Color) Color for drawer header text

        outerContent: colors.darkerGrey, // (backgroundColor) Color for drawer Outer content background
        innerContent: colors.darkGrey, // (backgroundColor) Color for drawer inner content background

        inactiveText: 'black', // (color) Color for inactive navigation Text
        activeText: 'white', // (color) Color for active navigation Text

        inactive: 'white', // (backgroundColor) Color for inactive navigation Background
        active: colors.darkBlue, // (backgroundColor) background Color for active navigation Background

        innerBorder: colors.lighterGrey, // (borderColor) Color for drawer inner border
        outerBorder: colors.darkerGrey, // (borderColor) Color for drawer outer border

        innerBorderRadius: 8, // (borderRadius) drawer inner border radius
        borderBottomWidth: 3, // (borderBottomWidth) drawer border bottom width
        borderLeftWidth: 5, // (borderLeftWidth) drawer border left width
    //=================================================
    },

    app_Header: {
    //Header Menu Colors
    //=================================================
    //-----------------------------------------------
        //hamburgerIcon is used in './components/CustomHeaderRight.js
        //headerMenu is used in 'App.js'
        //headerIcon is used in 'App.js'
        //titleText is used in 'App.js'
    //------------------------------------------------
        headerMenu: colors.darkerGrey, //(background) of header background for each page
        titleText: 'white', //(color) Color of title for each page
        hamburgerIcon: 'white', //(color) Color of hamburger icon
        headerIcon: colors.brightBlue, //(color) Color for header icon

    //Status Bar Colors
    //=================================================
        //Used in 'App.js'
        statusBar: "black", //Color for status bar
    //=================================================
    },

    page:{
    //Page Content Colors
    //=================================================
    //--------------------------------
        //These are used on all the pages
        //Used in DarkModeSwitch.js
        //Used in CustomDropdown.js
    //--------------------------------
        contentBackground: "black", // (backgroundColor)
        text: "white", // (color)
        textHighlight: "orange", // (color)
        textHighlightBackground: "white", // (backgroundColor)
    //=================================================
    },

    horizontalLine: {
    // Horizontal Line
    //================================================
    //---------------------------------
        //These are used on all the pages
    //--------------------------------
        color: "white", // (backgroundColor)
    //================================================

    },

    modal: {
    //Modal Colors
    //=================================================
    //--------------------------------
        //These are used in './components/CustomDropdown,js'
    //--------------------------------
        headerText: "white", // (color)
        header: colors.darkBlue, // (backgroundColor) modal header background 
        borderColor: "black", // (borderColor)
        background: colors.lighterGrey, // (backgroundColor) modal background

    //Selected Item In Modal----
        selectedItemText: "white", // (color)
        selectedItem: colors.primaryBlue, // (backgroundColor) modal selected item background

    //NonSelected Item In Modal---
        itemText: "black", // (color)
        nonselectedItem: "white", // (backgroundColor) modal unselected item background
    //=================================================
    },

    button: {
    //Button Colors
    //================================================
    //--------------------------------
        //Used on pages when buttons are used
        //Used in CustomDropdown.js
    //--------------------------------
        color: "white", // (backgroundColor) button background
        text: "black", // (color)
    //=================================================
    },

    vertical_Table: {
    //Vertical Table Colors
    //=================================================
    //--------------------------------
        //Used in VerticalTable.js
    //--------------------------------
        headerCell: colors.lightGrey, // (backgroundColor) vertical table header cell background
        headerCellText: 'black', // (color)
        cell: "black", // (backgroundColor) vertical table background
        cellText: "white", // (color)
        border: 'white', // (borderColor) vertical table border color
        title: 'white', // (color) vertical table title
    },

    horizontal_Table: {
    //Horizontal Table Colors
    //=================================================
    //--------------------------------
        //used in HorizontalTable.js
    //--------------------------------
        headerCell: colors.lightGrey, // (backgrounColor) horizontal table header background
        headerCellText: "black", // (color)
        border: 'white', // (borderColor) horizontal table border color
        cell: 'black', // (backgroundColor) horizontal table background
        cellText: "white", // (color)
        title: 'white', // (color) horizontal table title
    //=================================================
    },

    twoVar_Table: {
    //TwoVariable Table Colors
    //=================================================
    //--------------------------------
        //Used in TwoVariableTable.js
    //--------------------------------
        headerCell: colors.lightGrey, // (backgroundColor) two variable table header background
        cellText: 'white', // (color)
        border: 'white',  // (borderColor) two variable table border
        cell: 'black', // (backgroundColor) two variable background
        headerText: 'black', // (color)
        title: 'white', // (color) two variable table title
    //================================================== 

    },

    orderedList: {
    //Ordered List
    //=================================================
    //--------------------------------
        //Used in OrderedList.js
    //--------------------------------
        text: 'white', // (color)
        number: 'orange', // (color)
    //==================================================
    },

    unorderedList: {
    //Unordered List
    //=================================================
    //--------------------------------
        //Used in UnorderedList.js
    //--------------------------------
        text: 'white', // (color)
        bullet: 'orange', // (color)
    //==================================================
    },

    accordion: {
    //Accordion
    //================================================
    //--------------------------------
        //Used in Accordion.js
    //--------------------------------
        background: colors.darkBlue, // (backgroundColor)
        text: "white", // (color)
    },

    //Radio Button
    //================================================
    //--------------------------------
        //Used in Radio Button.js
    //--------------------------------
    radioButton: {
        text: "white", // (color)
        title: "white", // (color)
        selectedColor: "orange", // (color)
        unselectedColor: "white", // (color)
    },

    checkBox: {
    //CheckBox
    //================================================
    //--------------------------------
        //Used in CheckBox.js
    //--------------------------------
        text: "white", // (color)
        title: "white", // (color)
        color: "orange", // (color)
        uncheckedColor: "white", // (color)
    },

    videoPlayer :{
    //Video Player
    //================================================
    //--------------------------------
        //Used in Videoplayer.js
    //--------------------------------
    thumbTintColor: "orange", // (thumbTintColor)
    minimumTrackTintColor: "orange", // (minimumTrackTintColor)
    play: "orange", // (color)
    pause: "orange", // (color)
    },

    spinButton:{
        //Spin Button
        //================================================
        //--------------------------------
            //Used in Spin Button.js
        //--------------------------------
        backgroundColor: "black", // (backgroundColor)
        increment: "white", // (color)
        decrement: "white", // (color)
        text: "white", // (color)
        borderColor: "#ccc", // (borderColor)
        title: "white", // (color)

    },

    textField: {
        //Text Field
        //================================================
        //--------------------------------
            //Used in TextField.js
        //--------------------------------
        text: "white", // (color)
        title: "white", // (color)

    },
    dropDown: {
        //Drop Down
        //================================================
        //--------------------------------
            //Used in Dropdown.js
        //--------------------------------
        title: "white", // (color)
        selectedText: "white", // (color)
        itemText: "white", // (color)
        selectedBackgroundColor: colors.darkBlue, // (backgroundColor)
        listBackgroundColor: "black", // (backgroundColor)
        borderColor: "white", // (borderColor)

    },

    comboBox: {
        //Combo Box
        //================================================
        //--------------------------------
            //Used in ComboBox.js
        //--------------------------------
        title: "white", // (color)
        selectedText: "white", // (color)
        itemText: "white", // (color)
        selectedBackgroundColor: colors.darkBlue, // (backgroundColor)
        listBackgroundColor: "black", // (backgroundColor)
        borderColor: "white", // (borderColor)
        placeholderText: colors.lightGrey, // (color)

    },
};

export const lightMode = {
    theme: "light",

    drawer: {
    //Drawer Colors
    //=================================================
    //------------------------------
        //These are all used in './components/DrawerContent.js'
    //------------------------------
        header: colors.brightBlue, // (backgroundColor) Color for drawer header
        headerText: 'white', // (Color) Color for drawer header text

        outerContent: colors.lighterGrey, // (backgroundColor) Color for drawer Outer content background
        innerContent: colors.lighterGrey, // (backgroundColor) Color for drawer inner content background

        inactiveText: 'black', // (Color) Color for inactive navigation Text
        activeText: 'white', // (Color) Color for active navigation Text

        inactive: 'white', // (backgroundColor) Color for inactive navigation Background
        active: colors.darkBlue, // (backgroundColor) Color for active navigation Background

        innerBorder: "black", // (borderColor) drawer inner border color
        outerBorder: "black", // (borderColor) drawer outer border color

        innerBorderRadius: 8, // (borderRadius) drawer inner border radius
        borderBottomWidth: 3, // (borderBottomWidth) drawer border bottom width
        borderLeftWidth: 5, // (borderLeftWidth) drawer border left width

    },
    //===================================================

    app_Header: {
    //Header Menu Colors
    //===================================================
    //-----------------------------------------------
        //hamburgerIcon is used in './components/CustomHeaderRight.js
        //headerMenu is used in 'App.js'
        //headerIcon is used in 'App.js'
        //titleText is used in 'App.js'
        //statusBar is used in 'App.js'
    //------------------------------------------------
        headerMenu: colors.darkerGrey, // (backgroundColor) Color for header background for each page
        titleText: 'white', // (color) Color for title for each page
        hamburgerIcon: 'white', // (color) Color for hamburger icon
        headerIcon: colors.brightBlue, // (color) Color for header icon

    //Status Bar Colors
    //==================================================
    //Used in 'App.js'

        statusBar: "black", // (backgroundColor) Color for status bar
    //------------------------------------
    //==================================================
    },
    

    page: {
    //Page Content Colors
    //=================================================
    //--------------------------------
        //These are used on all the pages
        //Used in DarkModeSwitch.js
        //Used in CustomDropdown.js
    //--------------------------------
        contentBackground: "white", // (backgroundColor) 
        text: "black", // (color) 
        textHighlight: "red", // (color) 
        textHighlightBackground: "black", // (backgroundColor) 
    //================================================
    },

    horizontalLine: {
    // Horizontal Line
    //================================================
    //---------------------------------
        //These are used on all the pages
    //--------------------------------
        color: "black", // (backgroundColor)
    //================================================
    },

    modal: {
    //Modal Colors====================================
    //--------------------------------
        //These are used in './components/CustomDropdown,js'
    //--------------------------------
        headerText: "white", // (color)
        header: colors.primaryBlue, // (backgroundColor) modal header background 
        border: "black", // (borderColor) modal border color
        background: colors.lighterGrey, // (backgroundColor) modal background

    //Selected Item In Modal----
        selectedItemText: "white", // (color)
        selectedItem: colors.darkBlue, // (backgroundColor) modal selected item background

    //NonSelected Item In Modal---
        itemText: "black", //(color)
        nonselectedItem: "white", // (backgroundColor) modal unselected item background
    //================================================
    },

    button: {
    //Button Colors
    //================================================
    //--------------------------------
        //Used on pages when buttons are used
        //Used in CustomDropdown.js
    //--------------------------------
        color: "black", // (backgroundColor)
        text: "white", // (color)
    //================================================
    },

    vertical_Table: {
    //Vertical Table Colors
    //================================================
    //--------------------------------
        //Used in VerticalTable.js
    //--------------------------------
        headerCell: colors.lightGrey, // (backgroundColor) vertical table header background
        headerCellText: 'black', // (color)
        cell: "white", // (backgroundColor) vertical table background
        cellText: "black", // (color)
        border: 'black', // (borderColor) vertical table border color
        title: 'black', // (color) vertical table title
    //================================================
    },

    horizontal_Table: {
    //Horizontal Table Colors
    //================================================
    //--------------------------------
        //Used on pages when horizontal tables are used
    //--------------------------------
        headerCell: colors.lightGrey, // (backgroundColor) horizontal table header background
        headerCellText: "black",
        border: 'black', // (borderColor) horizontal table border color
        cell: 'white', // (backgroundColor) horizontal table background
        cellText: "black", // (color)
        title: 'black', // (color) horizontal table title
    //================================================
    },

    twoVar_Table: {
    //TwoVariable Table Colors
    //================================================
    //--------------------------------
        //Used in TwoVariableTable.js
    //--------------------------------
        headerCell: colors.lightGrey, // (backgroundColor) two variable table header background
        cellText: 'black', // (color)
        border: 'black', // (borderColor) two variable border color
        cell: 'white', // (backgroundColor) two variable table background
        headerText: 'black', // (color)
        title: 'black', // (color) two variable
    //================================================
    },

    orderedList: {
    //Ordered List
    //================================================
    //--------------------------------
        //Used in OrderedList.js
    //--------------------------------
        text: 'black', // (color)
        number: 'black', // (color)
    //================================================
    },

    unorderedList: {
    //Unordered List
    //================================================
    //--------------------------------
        //Used in UnorderedList.js
    //--------------------------------
        text: 'black', // (color)
        bullet: 'black', // (color)
    //================================================
    },

    accordion: {
    //Accordion
    //================================================
    //--------------------------------
        //Used in Accordion.js
    //--------------------------------
        background: colors.darkBlue, // (backgroundColor)
        text: "white", // (color)
    },

    radioButton: {
    //Radio Button
    //================================================
    //--------------------------------
        //Used in Radio Button.js
    //--------------------------------
        text: "black", // (color)
        title: "black", // (color)
        selectedColor: "black", // (color)
        unselectedColor: "black", // (color)

    },

    checkBox: {
    //CheckBox
    //================================================
    //--------------------------------
        //Used in CheckBox.js
    //--------------------------------
        text: "black", // (color)
        title: "black", // (color)
        color: "black", // (color)
        uncheckedColor: "black", // (color)

    },
    videoPlayer :{
        //Video Player
        //================================================
        //--------------------------------
            //Used in Videoplayer.js
        //--------------------------------
        
        thumbTintColor: colors.brightBlue, // (thumbTintColor)
        minimumTrackTintColor: colors.brightBlue, // (minimumTrackTintColor)
        play: "black", // (color)
        pause: "black", // (color)
    },

    spinButton:{
        //Spin Button
        //================================================
        //--------------------------------
            //Used in Spin Button.js
        //--------------------------------
        backgroundColor: "white", // (backgroundColor)
        increment: "black", // (color)
        decrement: "black", // (color)
        text: "black", // (color)
        borderColor: "#ccc", // (borderColor)
        title: "black", // (color)
    },

    textField: {
        //Text Field
        //================================================
        //--------------------------------
            //Used in TextField.js
        //--------------------------------
        text: "black", // (color)
        title: "black", // (color)
    },

    dropDown: {
        //Drop Down
        //================================================
        //--------------------------------
            //Used in Dropdown.js
        //--------------------------------
        title: "black", // (color)
        selectedText: "white", // (color)
        itemText: "black", // (color)
        selectedBackgroundColor: colors.darkBlue, // (backgroundColor)
        listBackgroundColor: "white", // (backgroundColor)
        borderColor: colors.mediumGrey, // (borderColor)
    },

    comboBox: {
        //Combo Box
        //================================================
            //Used in ComboBox.js
        //--------------------------------
        title: "black", // (color)
        selectedText: "white", // (color)
        itemText: "black", // (color)
        selectedBackgroundColor: colors.darkBlue, // (backgroundColor)
        listBackgroundColor: "white", // (backgroundColor)
        borderColor: colors.mediumGrey, // (borderColor)   
        placeholderText: colors.lightGrey, // (color)
    }

};