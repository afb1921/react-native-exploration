import { StyleSheet, View, Text, ScrollView} from "react-native";
import React, {useEffect} from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Video} from 'expo-av';
import Slider from "@react-native-community/slider"
import {colors} from '../constant'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; 

//Theme Imports
//==================================================
import themeContext from '../Themes/themeContext';
//==================================================

const VideoPlayer = ({video, videoName}) => {

  //For Theme Management
  //================================
  const { theme } = React.useContext(themeContext);
  //================================
    
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(0);

  const navigation = useNavigation(); 

  useEffect(() => {
    // Pause video playback when the screen loses focus
    const unsubscribeBlur = navigation.addListener('blur', () => {
      if (videoRef.current && isPlaying) {
        videoRef.current.pauseAsync();
        setIsPlaying(false);
      }
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      unsubscribeBlur();
    };
  }, [navigation, isPlaying]);


  const onPlayPausePress = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onSliderValueChange = (value) => {
    setSliderValue(value);
    if (videoRef.current) {
      videoRef.current.setPositionAsync(value);
    }
  };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            
            <Video 
                style = {styles.video}
                ref={videoRef}
                source={video}
                resizeMode="contain"
                importantForAccessibility='yes'
                accessible={true}
                isLooping
                accessibilityLabel={`${videoName}, video screen`}
                shouldPlay={isPlaying}
                onPlaybackStatusUpdate={(status) => {
                    if (status.positionMillis && status.durationMillis) {
                        setSliderValue(status.positionMillis / status.durationMillis);
                    }
                }}
                onError={(error) => console.error("Video Error:", error)}

            />

            <View style={styles.controls}>
                <TouchableOpacity 
                    onPress={onPlayPausePress} 
                    accessibilityLabel={isPlaying ? 'Pause' : 'Play video'}
                    accessibilityRole="button">
                    <Text>{isPlaying ? 
                        <Icon name="pause-circle" size={45} style={{color: theme.videoPlayer.pause}}/> 
                        : 
                        <Icon name="play-circle" size={45} style={{color: theme.videoPlayer.play}}/>
                    }</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.controls}>

                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue}
                    onValueChange={onSliderValueChange}
                    thumbTintColor={theme.videoPlayer.thumbTintColor} 
                    minimumTrackTintColor={theme.videoPlayer.minimumTrackTintColor}
                />

            </View>
            

        </ScrollView>

    );

};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      video: {
        width: 300,
        height: 200,
        backgroundColor: "white",
      },
      controls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      slider: {
        flex: 1,
      },

});

export default VideoPlayer;