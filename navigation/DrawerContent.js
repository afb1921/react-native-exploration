import React, { useState, useContext, useRef, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';

//Theme Imports
//================================================================
import DarkModeSwitch from '../components/DarkModeSwitch';
import themeContext from '../Themes/themeContext';
//================================================================

function CustomDrawerContent(props) {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const { theme } = useContext(themeContext);

  const firstElementRef = useRef(null); // Reference for the first element in the parent menu

  const delay = 250; // Delay in milliseconds

  const setAccessibilityFocus = () => {
    if (firstElementRef.current) {
      const reactTag = firstElementRef.current._nativeTag;
      AccessibilityInfo.setAccessibilityFocus(reactTag);
    }
  };

  useEffect(() => {
    if (!mainDrawer && filteredItems.routes.length > 0) {
      setTimeout(setAccessibilityFocus, delay);
    }
  }, [mainDrawer, filteredItems]);


  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const onItemParentPress = (key) => {
    const filteredMainDrawerRoutes = props.drawerItems.find((e) => {
      return e.key === key;
    });
    if (filteredMainDrawerRoutes.routes.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes.routes[0];
      props.navigation.toggleDrawer();
      props.navigation.navigate(selectedRoute.nav, {
        screen: selectedRoute.routeName,
      });
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
    }
  };

  const renderMainDrawer = () => {
    const currentRouteName = props.state.routeNames[props.state.index]; // Get the name of the current route
  
    return (
      <View style={[styles.drawerHeader, styles.innerContent, { backgroundColor: theme.drawer.innerContent, borderRadius: theme.drawer.innerBorderRadius, borderBottomWidth: theme.drawer.borderBottomWidth, borderColor: theme.drawer.innerBorder }]}>
        {props.drawerItems.map((parent) => {
          const isActive = parent.key === currentRouteName || // Check if the parent is the current route
            (parent.routes && parent.routes.some((route) => route.routeName === currentRouteName)); // Check if the current route is inside the parent's routes
  
          return (
            <TouchableOpacity
              key={parent.key}
              accessibilityRole='menuItem'
              testID={parent.key}
              onPress={() => {
                onItemParentPress(parent.key);
              }}
              style={styles.drawerItemButton}
              // accessibilityLabel={isActive ? `Current Page, ${parent.title} `: `${parent.title}`}
            >
              <View
                style={[
                  styles.itemLabelContainer,
                  {
                    backgroundColor: isActive ? theme.drawer.active : theme.drawer.inactive,
                  }
                ]}
              >
                <Text
                  style={[
                    styles.itemText,
                    {
                      color: isActive ? theme.drawer.activeText : theme.drawer.inactiveText,
                    },
                  ]}
                >
                  {parent.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  
  const renderFilteredItemsDrawer = () => {
    const currentRouteName = props.state.routeNames[props.state.index]; // Get the name of the current route
  
    return (
      <View style={[styles.drawerHeader, styles.innerContent, { backgroundColor: theme.drawer.innerContent, borderRadius: theme.drawer.innerBorderRadius, borderBottomWidth: theme.drawer.borderBottomWidth, borderColor: theme.drawer.innerBorder }]}>
        <TouchableOpacity
          onPress={() => toggleMainDrawer()}
          style={[styles.backButtonRow, {borderColor: theme.page.text}]}
          ref={firstElementRef}
          accessibilityRole='button'
          accessibilityHint='Activate to return to the previous menu.'
        >
          <Text style={[styles.backButtonText, styles.itemText, { color: theme.page.text }]}>{'BACK'}</Text>
        </TouchableOpacity>
        {filteredItems.routes.map((route) => {
          const isActive = route.routeName === currentRouteName; // Check if this item is the current route
  
          return (
            <TouchableOpacity
              key={route.routeName}
              testID={route.routeName}
              accessibilityRole='menuItem'
              // accessibilityLabel={isActive ? `Current Page, ${route.title} `: `${route.title}`}
              onPress={() =>
                props.navigation.navigate(route.nav, {
                  screen: route.routeName,
                })
              }
              style={[
                styles.itemLabelContainer,
                { margin: 10, backgroundColor: isActive ? theme.drawer.active : theme.drawer.inactive }
              ]}
            >
              <Text
                style={[
                  styles.itemText,
                  { color: isActive ? theme.drawer.activeText : theme.drawer.inactiveText }
                ]}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: theme.drawer.outerContent, padding: 10}}>
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.drawer.innerContent }]}
        forceInset={{ top: 'always', horizontal: 'never' }}>
        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </SafeAreaView>
      <View style={[styles.centered, { backgroundColor: theme.drawer.outerContent }]}>
        <DarkModeSwitch
          onToggle={() => {
            // console.log(toggleButtonRef.current._nativeTag)
            // console.log(darkModeTheme)
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
  },
  itemText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  drawerItemButton: {
    margin: 10,
  },
  drawerInnerSection: {
    flex: 1,
    marginTop: 15,
  },
  drawerOuterContent: {
    flex: 1,
  },
  innerContent:{
    borderRadius: 5,
    borderWidth: 1,
  },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomWidth: 1,
  },
  backButtonText: {
    marginLeft: 10,
  },
    itemLabelContainer: {
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  centered: {
    alignItems: 'center',
  },
});

export default CustomDrawerContent;
