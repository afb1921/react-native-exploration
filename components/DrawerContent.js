import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

// Custom Imports
//================================================
import { def_Page } from '../constant';
//================================================

// Imports for Theme Management
//================================================
import themeContext from '../Themes/themeContext';
import DarkModeSwitch from './DarkModeSwitch'
//================================================

export function DrawerContent(props) {
  const { darkModeTheme, setDarkMode, screens } = props; // Extract darkModeTheme and setDarkMode from props

  // Theme Management
  //================================================
  const { theme } = useContext(themeContext); // Current context of theme
  //================================================

  // Size Management
  //================================================
  const { width, height } = Dimensions.get('window'); // Get the dimensions of the screen
  //================================================

  // Item in Drawer get Style on Theme
  //================================================
  const getPageStyle = (index) => ({
    backgroundColor: props.state.index === index ?
      theme.drawer.active : theme.drawer.inactive,

    color: props.state.index === index ?
      theme.drawer.activeText : theme.drawer.inactiveText,
  });

  //================================================

  // Render A Drawer Item
  //================================================
  const renderDrawerItems = () => {
    return (
      <View
        style={[
          styles.drawerInnerSection,
          {
            borderRadius: theme.drawer.innerBorderRadius,
            borderBottomWidth: theme.drawer.borderBottomWidth,
            borderColor: theme.drawer.innerBorder,
            backgroundColor: theme.drawer.innerContent,
          }
        ]}
        accessibilityRole="menu" // Apply "menu" role to the parent container
      >
        {screens.map((screen, index) => (
          <DrawerItem
            key={index}
            label={screen.menu_name}
            accessibilityLabel={props.state.index === index ? `Current Page: ${screen.name}` : screen.name}
            onPress={() => {
              props.navigation.navigate(screen.name);
            }}
            labelStyle={[styles.drawerItemLabel, getPageStyle(index)]}
          />
        ))}
      </View>
    );
  };
  //================================================

  return (
    <View
      style={[
        styles.drawerOuterContent, {
          backgroundColor: theme.drawer.outerContent,
          borderLeftWidth: theme.drawer.borderLeftWidth,
          borderColor: theme.drawer.outerBorder
        }
      ]}>

      <View
        style={[
          styles.drawerHeader,
          height >= 850 && height <= 900 // Resizing based on screen size
            ? { marginTop: 35, marginBottom: -40, paddingBottom: 20 } // If the first set of conditions are true the styles will be applied (marginTop, marginBottom, and paddingBottom)
            : {},
          { backgroundColor: theme.drawer.header },
        ]}
      >
        <Text
          style={[styles.drawerHeaderText, { color: theme.drawer.headerText }]}
          accessibilityLabel={def_Page.drawerTitle}
          accessibilityRole='header'
        >
          {def_Page.drawerTitle}
        </Text>

      </View>

      <DrawerContentScrollView>

        {renderDrawerItems()}

        <DarkModeSwitch
          darkModeTheme={darkModeTheme}
          setDarkMode={setDarkMode}
          onToggle={() => {
            // console.log(toggleButtonRef.current._nativeTag)
          }}
        />
      </DrawerContentScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
  },
  drawerHeaderText: {
    fontSize: 20,
  },
  drawerItemLabel: {
    padding: 15,
    margin: -10,
    marginLeft: 0,
    marginRight: -30,
    fontSize: 17,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  drawerInnerSection: {
    flex: 1,
    marginTop: 15,
  },
  drawerOuterContent: {
    flex: 1,
  },
});
