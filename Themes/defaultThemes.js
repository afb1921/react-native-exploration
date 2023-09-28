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
        header: '#039fff', //Color for drawer header
        headerText: 'white', //Color for drawer header text

        outerContent: '#181818', //Color for drawer Outer content background
        innerContent: '#282828', //Color for drawer inner content background

        inactiveText: 'black', //Color for inactive navigation Text
        activeText: 'white', //Color for active navigation Text

        inactive: 'white', //Color for inactive navigation Background
        active: "#1DA1F2", //Color for active navigation Background

        innerBorder: '#ebeded', //Color for drawer inner border
        outerBorder: "#181818", //Color for drawer outer border

        innerBorderRadius: 8, //drawer inner border radius
        borderBottomWidth: 3, //drawer border bottom width
        borderLeftWidth: 5, //drawer border left width
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
        headerMenu: '#1f1f1f', //Color of header background for each page
        titleText: 'white', //Color of title for each page
        hamburgerIcon: 'white', //Color of hamburger icon
        headerIcon: "#039fff", //Color for header icon

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
        //User in CustomDropdown.js
    //--------------------------------
        contentBackground: "black",
        text: "white",
        textHighlight: "orange",
        textHighlightBackground: "white",
        border: "white",
    //=================================================
    },

    modal: {
    //Modal Colors
    //=================================================
    //--------------------------------
        //These are used in './components/CustomDropdown,js'
    //--------------------------------
        headerText: "white",
        header: "#1DA1F2", //modal header background 
        borderColor: "black",
        background: "#ebeded", //modal background

    //Selected Item In Modal----
        selectedItemText: "white",
        selectedItem: "#1DA1F2", //modal selected item background

    //NonSelected Item In Modal---
        itemText: "black",
        nonselectedItem: "white", //modal unselected item background
    //=================================================
    },

    button: {
    //Button Colors
    //================================================
    //--------------------------------
        //Used on pages when buttons are used
        //Used in CustomDropdown.js
    //--------------------------------
        color: "white", //button background
        text: "black",
    //=================================================
    },

    vertical_Table: {
    //Vertical Table Colors
    //=================================================
    //--------------------------------
        //Used in VerticalTable.js
    //--------------------------------
        headerCell: colors.lightGrey, //vertical table header cell background
        headerCellText: 'black',
        cell: "black", //vertical table background
        cellText: "white",
        border: 'white', //vertical table border color
    },

    horizontal_Table: {
    //Horizontal Table Colors
    //=================================================
    //--------------------------------
        //used in HorizontalTable.js
    //--------------------------------
        headerCell: colors.lightGrey, //horizontal table header background
        headerCellText: "black",
        border: 'white', //horizontal table border color
        cell: 'black', //horizontal table background
        cellText: "white",
    //=================================================
    },

    twoVar_Table: {
    //TwoVariable Table Colors
    //=================================================
    //--------------------------------
        //Used in TwoVariableTable.js
    //--------------------------------
        headerCell: colors.lightGrey, //two variable table header background
        cellText: 'white',
        border: 'white',  //two variable table border
        cell: 'black', //two variable background
        headerText: 'black', 
    //================================================== 

    },

    orderedList: {
    //Ordered List
    //=================================================
    //--------------------------------
        //Used in OrderedList.js
    //--------------------------------
        text: 'white',
    //==================================================
    },

    unorderedList: {
    //Unordered List
    //=================================================
    //--------------------------------
        //Used in UnorderedList.js
    //--------------------------------
        text: 'white',
        bullet: 'orange',
    //==================================================
    },

    accordion: {
    //Accordion
    //================================================
    //--------------------------------
        //Used in Accordion.js
    //--------------------------------
        background: colors.primaryBlue,
        text: "white",
    },

    //Radio Button
    //================================================
    //--------------------------------
        //Used in Radio Button.js
    //--------------------------------
    radioButton: {
        text: "white",
        selectedColor: "orange",
        unselectedColor: "white",
    },

    checkBox: {
    //CheckBox
    //================================================
    //--------------------------------
        //Used in CheckBox.js
    //--------------------------------
        text: "white",
        color: "orange",
        uncheckedColor: "white",
    },

    videoPlayer :{
    //Video Player
    //================================================
    //--------------------------------
        //Used in Videoplayer.js
    //--------------------------------
    
    thumbTintColor: "orange",
    minimumTrackTintColor: "orange",
    play: "orange",
    pause: "orange",

    }
};

export const lightMode = {
    theme: "light",

    drawer: {
    //Drawer Colors
    //=================================================
    //------------------------------
        //These are all used in './components/DrawerContent.js'
    //------------------------------
        header: '#039fff', //Color for drawer header
        headerText: 'white', //Color for drawer header text

        outerContent: '#ebeded', //Color for drawer Outer content background
        innerContent: '#ebeded', //Color for drawer inner content background

        inactiveText: 'black', //Color for inactive navigation Text
        activeText: 'white', //Color for active navigation Text

        inactive: 'white', //Color for inactive navigation Background
        active: "#1DA1F2", //Color for active navigation Background

        innerBorder: '#ebeded', //drawer inner border color
        outerBorder: "#181818", //drawer outer border color

        innerBorderRadius: 0, //drawer inner border radius
        borderBottomWidth: 0, //drawer border bottom width
        borderLeftWidth: 0, //drawer border left width

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
        headerMenu: '#1f1f1f', //Color for header background for each page
        titleText: 'white', //Color for title for each page
        hamburgerIcon: 'white', //Color for hamburger icon
        headerIcon: "#039fff", //Color for header icon

    //Status Bar Colors
    //==================================================
    //Used in 'App.js'

        statusBar: "black", //Color for status bar
    //------------------------------------
    //==================================================
    },
    

    page: {
    //Page Contnt Colors
    //=================================================
    //--------------------------------
        //These are used on all the pages
        //Used in DarkModeSwitch.js
        //User in CustomDropdown.js
    //--------------------------------
        contentBackground: "white",
        text: "black",
        textHighlight: "red",
        textHighlightBackground: "black",
        border: "black",
    //================================================
    },

    modal: {
    //Modal Colors====================================
    //--------------------------------
        //These are used in './components/CustomDropdown,js'
    //--------------------------------
        headerText: "white",
        header: "#1DA1F2", //modal header background
        border: "black", //modal border cor
        background: "#ebeded", //modal background

    //Selected Item In Modal----
        selectedItemText: "white",
        selectedItem: "#1DA1F2", //modal selected item background

    //NonSelected Item In Modal---
        itemText: "black",
        nonselectedItem: "white", //modal unselected item background
    //================================================
    },

    button: {
    //Button Colors
    //================================================
    //--------------------------------
        //Used on pages when buttons are used
        //Used in CustomDropdown.js
    //--------------------------------
        color: "black",
        text: "white",
    //================================================
    },

    vertical_Table: {
    //Vertical Table Colors
    //================================================
    //--------------------------------
        //Used in VerticalTable.js
    //--------------------------------
        headerCell: colors.lightGrey, //vertical table header background
        headerCellText: 'black',
        cell: "white", //vertical table background
        cellText: "black",
        border: 'black', //vertical table border color
    //================================================
    },

    horizontal_Table: {
    //Horizontal Table Colors
    //================================================
    //--------------------------------
        //Used on pages when horizontal tables are used
    //--------------------------------
        headerCell: colors.lightGrey, //horizontal table header background
        headerCellText: "black",
        border: 'black', //horizontal table border color
        cell: 'white', //horizontal table background
        cellText: "black",
    //================================================
    },

    twoVar_Table: {
    //TwoVariable Table Colors
    //================================================
    //--------------------------------
        //Used in TwoVariableTable.js
    //--------------------------------
        headerCell: colors.lightGrey, //two variable table header background
        cellText: 'black',
        border: 'black', //two variable border color
        cell: 'white', //two variable table background
        headerText: 'black', 
    //================================================
    },

    orderedList: {
    //Ordered List
    //================================================
    //--------------------------------
        //Used in OrderedList.js
    //--------------------------------
        text: 'black',
    //================================================
    },

    unorderedList: {
    //Unordered List
    //================================================
    //--------------------------------
        //Used in UnorderedList.js
    //--------------------------------
        text: 'black',
        bullet: 'black',
    //================================================
    },

    accordion: {
    //Accordion
    //================================================
    //--------------------------------
        //Used in Accordion.js
    //--------------------------------
        background: colors.primaryBlue,
        text: "white",
    },

    radioButton: {
    //Radio Button
    //================================================
    //--------------------------------
        //Used in Radio Button.js
    //--------------------------------
        text: "black",
        selectedColor: "black",
        unselectedColor: "black",

    },

    checkBox: {
    //CheckBox
    //================================================
    //--------------------------------
        //Used in CheckBox.js
    //--------------------------------
        text: "black",
        color: "black",
        uncheckedColor: "black",

    },
    videoPlayer :{
        //Video Player
        //================================================
        //--------------------------------
            //Used in Videoplayer.js
        //--------------------------------
        
        thumbTintColor: colors.brightBlue,
        minimumTrackTintColor: colors.brightBlue,
        play: "black",
        pause: "black",  


    }

};