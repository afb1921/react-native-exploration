//Default Themes (Light and Dark)

import { colors} from '../constant';

export const darkMode = {

    theme: 'dark',

    //Drawer Colors (& three styles)
    //================================================

    //-----------------------------------------------
        //These are all used in './components/DrawerContent.js'
    //------------------------------------------------

    drawerHeader: '#039fff', //Color for drawer header
    drawerHeaderText: 'white', //Color for drawer header text

    drawerOuterContent: '#181818', //Color for drawer Outer content background
    drawerInnerContent: '#282828', //Color for drawer inner content background

    drawerInactiveText: 'black', //Color for inactive navigation Text
    drawerActiveText: 'white', //Color for active navigation Text

    drawerInactive: 'white', //Color for inactive navigation Background
    drawerActive: "#1DA1F2", //Color for active navigation Background

    drawerInnerBorder: '#ebeded', //Color for drawer inner border
    drawerOuterBorder: "#181818", //Color for drawer outer border

    drawerInnerBorderRadius: 8, //drawer inner border radius
    drawerBorderBottomWidth: 3, //drawer border bottom width
    drawerBorderLeftWidth: 5, //drawer border left width

    //=================================================


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
    //=================================================


    //Status Bar Colors
    //=================================================
        //Used in 'App.js'
    statusBar: "black", //Color for status bar
    //=================================================


    //Page Content Colors
    //=================================================
    //--------------------------------
        //These are used on all the pages
    //--------------------------------
    contentBackground: "black",
    text: "white",
    textHighlight: "orange",
    textHighlightBackground: "white",
    border: "white",
    //=================================================


    //Modal Colors
    //=================================================
    //--------------------------------
        //These are used in './components/CustomDropdown,js'
    //--------------------------------
    modalHeaderText: "white",
    modalHeader: "#1DA1F2", //modal header background 
    modalBorderColor: "black",
    modal: "#ebeded", //modal background

    //Selected Item In Modal----
    modalSelectedItemText: "white",
    modalSelectedItem: "#1DA1F2", //modal selected item background

    //NonSelected Item In Modal---
    modalItemText: "black",
    modalNonselectedItem: "white", //modal unselected item background
    //=================================================

    //Button Colors
    //================================================
    //--------------------------------
        //Used on pages when buttons are used
    //--------------------------------
    button: "white", //button background
    buttonText: "black",
    //=================================================

    //Vertical Table Colors
    //=================================================
    //--------------------------------
        //Used on pages when vertical tables are used
    //--------------------------------
    verticalTableHeaderCell: colors.lightGrey, //vertical table header cell background
    verticalTableHeaderCellText: 'black',

    verticalTableCell: "black", //vertical table background
    tableCellText: "white",

    verticalTableBorder: 'white', //vertical table border color

    //Horizontal Table Colors
    //=================================================
    //--------------------------------
        //Used on pages when horizontal tables are used
    //--------------------------------
    horizontalTableHeader: colors.lightGrey, //horizontal table header background
    horizontalTableHeaderText: "black",
    horizontalTableBorder: 'white', //horizontal table border color
    
    horizontalTable: 'black', //horizontal table background
    horizontalTableText: "white",
    //=================================================


    //TwoVariable Table Colors
    //=================================================
    //--------------------------------
        //Used on pages when two variable is used
    //--------------------------------
    twoVarTableHeader: colors.lightGrey, //two variable table header background
    twoVarTableCellText: 'white',
    twoVarTableBorder: 'white',  //two variable table border
    twoVarTable: 'black', //two variable background
    twoVarTableHeaderText: 'black', 
    //================================================== 


    //Ordered List
    //=================================================
    //--------------------------------
        //Used on pages when ordered list is used
    //--------------------------------
    orderedListText: 'white',
    //==================================================

    //Unordered List
    //=================================================
    //--------------------------------
        //Used on pages when unordered list is used
    //--------------------------------
    unorderedListText: 'white',
    unorderedListBullet: 'orange',
    //==================================================
};

export const lightMode = {
    theme: "light",

    //Drawer Colors
    //=================================================
    //------------------------------
        //These are all used in './components/DrawerContent.js'
    //------------------------------
    drawerHeader: '#039fff', //Color for drawer header
    drawerHeaderText: 'white', //Color for drawer header text

    drawerOuterContent: '#ebeded', //Color for drawer Outer content background
    drawerInnerContent: '#ebeded', //Color for drawer inner content background

    drawerInactiveText: 'black', //Color for inactive navigation Text
    drawerActiveText: 'white', //Color for active navigation Text

    drawerInactive: 'white', //Color for inactive navigation Background
    drawerActive: "#1DA1F2", //Color for active navigation Background

    drawerInnerBorder: '#ebeded', //drawer inner border color
    drawerOuterBorder: "#181818", //drawer outer border color

    drawerInnerBorderRadius: 0, //drawer inner border radius
    drawerBorderBottomWidth: 0, //drawer border bottom width
    drawerBorderLeftWidth: 0, //drawer border left width
    //===================================================

    //Header Menu Colors
    //===================================================
    //-----------------------------------------------
        //hamburgerIcon is used in './components/CustomHeaderRight.js
        //headerMenu is used in 'App.js'
        //headerIcon is used in 'App.js'
        //titleText is used in 'App.js'
    //------------------------------------------------
    headerMenu: '#1f1f1f', //Color for header background for each page
    titleText: 'white', //Color for title for each page
    hamburgerIcon: 'white', //Color for hamburger icon
    headerIcon: "#039fff", //Color for header icon
    //==================================================

    //Status Bar Colors
    //==================================================
        //Used in 'App.js'
    statusBar: "black", //Color for status bar
    //------------------------------------


    //Page Contnt Colors
    //=================================================
    //--------------------------------
        //These are used on all the pages
    //--------------------------------
    contentBackground: "white",
    text: "black",
    textHighlight: "red",
    textHighlightBackground: "black",
    border: "black",
    //================================================

    //Modal Colors====================================
    //--------------------------------
        //These are used in './components/CustomDropdown,js'
    //--------------------------------
    modalHeaderText: "white",
    modalHeader: "#1DA1F2", //modal header background
    modalBorder: "black", //modal border cor
    modal: "#ebeded", //modal background

    //Selected Item In Modal----
    modalSelectedItemText: "white",
    modalSelectedItem: "#1DA1F2", //modal selected item background

    //NonSelected Item In Modal---
    modalItemText: "black",
    modalNonselectedItem: "white", //modal unselected item background
    //================================================

    //Button Colors
    //================================================
    //--------------------------------
        //Used on pages when buttons are used
    //--------------------------------
    button: "black",
    buttonText: "white",
    //================================================

    //Vertical Table Colors
    //================================================
    //--------------------------------
        //Used on pages when vertical tables are used
    //--------------------------------
    verticalTableHeaderCell: colors.lightGrey, //vertical table header background
    verticalTableHeaderCellText: 'black',

    verticalTableCell: "white", //vertical table background
    tableCellText: "black",

    verticalTableBorder: 'black', //vertical table border color
    //================================================

    //Horizontal Table Colors
    //================================================
    //--------------------------------
        //Used on pages when horizontal tables are used
    //--------------------------------
    horizontalTableHeader: colors.lightGrey, //horizontal table header background
    horizontalTableText: "black",
    horizontalTableBorder: 'black', //horizontal table border color
    
    horizontalTable: 'white', //horizontal table background
    horizontalTableCellText: "black",
    //================================================

    //TwoVariable Table Colors
    //================================================
    //--------------------------------
        //Used on pages when two variable tables are used
    //--------------------------------
    twoVarTableHeader: colors.lightGrey, //two variable table header background
    twoVarTableCellText: 'black',
    twoVarTableBorder: 'black', //two variable border color
    twoVarTable: 'white', //two variable table background
    twoVarTableHeaderText: 'black', 
    //================================================

    //Ordered List
    //================================================
    //--------------------------------
        //Used on pages when ordered lists are used
    //--------------------------------
    orderedListText: 'black',
    //================================================

    //Unordered List
    //================================================
    //--------------------------------
        //Used on pages when unordered lists are used
    //--------------------------------
    unorderedListText: 'black',
    unorderedListBullet: 'black',
    //================================================
};