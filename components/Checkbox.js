import React from 'react';

import {View, Text} from 'react-native';
import CheckBox from 'expo-checkbox';

const CustomCheckBox = ({title}) => {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)

    return (
        <View>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                accessibilityLabel={`${title}`}
           />
            {/* <Text>{toggleCheckBox ? 'Checked' : 'Unchecked'}</Text> */}
        </View>
    );

}

export default CustomCheckBox;