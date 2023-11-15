import React, { useContext} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import HorizontalLine from './basic_components/HorizontalLine';
import { colors, def_App } from '../constant'


//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';


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
                style={{ alignSelf: 'flex-end', marginRight: 10 }}
                onPress={nextButtonPress}
                accessibilityRole="button"
            >
                <View style={{padding: 10, marginBottom: 10, flexDirection: 'row', borderRadius: 10, borderWidth: 0, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text
                        style={{ color: theme.page.text, fontWeight: 'bold', fontSize: 18 }}
                        accessibilityLabel='Next Component Page'
                    >
                        Next Page
                    </Text>
                    <FontAwesome
                        name="chevron-right" //The icon, This is configurable in the screens array
                        style={[styles.headerIcon, { color: theme.page.text, marginLeft: 10 }]}
                        importantForAccessibility='no' //This hides the icon from screen readers its decoration therefore needs hidden
                        accessible={false}
                        size={25}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }

});


export default NextPageButton;