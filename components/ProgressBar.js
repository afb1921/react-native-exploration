import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';

//Other Styles Options such as Circle, Pie 
//available on the package site: https://www.npmjs.com/package/react-native-progress

const ProgressBar = () => {
    const [progress, setProgress] = React.useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1); // Increment the progress
        } else {
          clearInterval(interval);
        }
      }, 1000); // Update every second
  
      return () => {
        clearInterval(interval);
      };
    }, [progress]);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Progress.Bar
          progress={progress/100}
          width={200} // Adjust the width as needed
          height={20} // Adjust the height as needed
          borderRadius={10} // Adjust the border radius as needed
          borderWidth={2} // Adjust the border width as needed
          color="#3498db" // Customize the color
        />
        <Text style={{ marginTop: 10 }}>
            {`${Math.round(progress)}%`}
            
        </Text>
      </View>
    );
  };
  
  export default ProgressBar;
  