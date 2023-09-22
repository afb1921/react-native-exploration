import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

// const data = [
//     'Item 1',
//     'Item 2',
//     'Item 3',
//     'Item 4',
//     // Add more items here
//   ];

const CustomRadioButton = ({data, title}) => {
    const [selectedItem, setSelectedItem] = useState(null);


    return (
        <FlatList 
            accessibilityRole={"list"}
            keyExtractor={(item, index) => index.toString()}
            data={data}
        
            renderItem={({ item, index }) => (

                <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}> 
                    <RadioButton.Android
                        accessibilityLabel={(data.length > 1) ? `${item}, ${index+1} of ${data.length}` : `${item}`}
                        value={item}
                        status={selectedItem === item ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedItem(item)}
                    />
                    <Text 
                        importantForAccessibility='no' 
                        accessible={false}
                    >
                        {item}
                    </Text>
                </View>
    
            )}

        />

    );

  };
  
  export default CustomRadioButton;
  



// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { RadioButton } from 'react-native-paper';

// // const data = [
// //     'Item 1',
// //     'Item 2',
// //     'Item 3',
// //     'Item 4',
// //     // Add more items here
// //   ];

// const CustomRadioButton = ({data, title}) => {
//     const [selectedItem, setSelectedItem] = useState(null);


//     return (
//         <View 
//             accessibilityRole={(data.length > 1) ? 'list' : "none"}
//             aria-label={(data.length > 1) ? `Select a option for ${title}, ${data.length} items` : ""}
//         >
//             {data.map((item, index) => (

//             <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}> 
//                 <RadioButton.Android
//                     accessibilityLabel={(data.length > 1) ? `${item}, ${index+1} of ${data.length}` : `${item}`}
//                     value={item}
//                     status={selectedItem === item ? 'checked' : 'unchecked'}
//                     onPress={() => setSelectedItem(item)}
//                 />
//                 <Text 
//                     importantForAccessibility='no' 
//                     accessible={false}
//                 >
//                     {item}
//                 </Text>
//             </View>
    
//             ))}

//         </View>

//     );

//   };
  
//   export default CustomRadioButton;
  