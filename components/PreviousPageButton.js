import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import HorizontalLine from './basic_components/HorizontalLine';
import { colors, def_App } from '../constant'


//Theme Imports
//==================================================
import themeContext from '../themes/themeContext';


const NextPageButton = ({PageName}) => {

    //For Theme Management
    //================================
    const { theme } = useContext(themeContext);
    //================================
    const navigation = useNavigation()

    const nextButtonPress = () => {
        navigation.navigate(def_App.commonLabel, {
            screen: PageName,
        })
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={{ alignSelf: 'flex-start', marginLeft: 10 }}
                onPress={nextButtonPress}
                accessibilityRole="button"
            >
                <View style={{padding: 10, marginBottom: 10, flexDirection: 'row', borderRadius: 10, borderWidth: 0, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <FontAwesome
                        name="chevron-left" //The icon, This is configurable in the screens array
                        style={[styles.headerIcon, { color: theme.page.text, marginRight: 10 }]}
                        importantForAccessibility='no' //This hides the icon from screen readers its decoration therefore needs hidden
                        accessible={false}
                        size={25}
                    />
                    <Text
                        style={{ color: theme.page.text, fontWeight: 'bold', fontSize: 18 }}
                        accessibilityLabel='Previous Component Page'
                    >
                        Previous Page
                    </Text>

                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }

});


export default NextPageButton;