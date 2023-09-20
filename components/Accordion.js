import React from 'react';
import { View, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Accordion = ({title, collapsedData}) => {
    const [collapsed, setCollapsed] = React.useState(true);

    const toggleExpand = () => {
        setCollapsed(!collapsed);
    }
    return (
        <View>
            <TouchableOpacity
                onPress={toggleExpand}
                accessible={true}
                accessibilityLabel={collapsed ? 'Expand' : 'Collapse'}
                accessibilityRole="button"
                accessibilityState={{ expanded: !collapsed }}
            >
                <Text>
                    {title}
                </Text>
            </TouchableOpacity>

            <Collapsible collapsed={collapsed}>
                <View>
                    <Text>
                        {collapsedData}
                    </Text>
                </View>
            </Collapsible>
        </View>

    );

}


export default Accordion;