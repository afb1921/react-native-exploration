import React, { useEffect, useRef, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AccessibilityInfo } from 'react-native';
import { Video } from 'expo-av';
import Slider from "@react-native-community/slider";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

// Theme Import
//==================================================
import themeContext from '../../Themes/themeContext';
//==================================================

const VideoPlayer = ({ video, videoName }) => {
// For Theme Management
//================================
  const { theme } = useContext(themeContext);
//================================

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loadAsync(video);
      videoRef.current.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setVideoDuration(status.durationMillis);
          setSliderValue(status.positionMillis / status.durationMillis);
        }
      });
    }
  }, [video]);

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

  // Pause the video when the screen loses focus
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (videoRef.current) {
        videoRef.current.pauseAsync();
        setIsPlaying(false);
      }
    });

    return unsubscribe;
  }, [navigation]);

  // useEffect(() => {
  //   console.log(sliderValue)
  // }, [sliderValue])

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        ref={videoRef}
        resizeMode="contain"
        shouldPlay={isPlaying}
        onError={(error) => console.error('Video Error:', error)}
        isLooping={true}
      />

      <View style={styles.controls}>
        <TouchableOpacity
          onPress={onPlayPausePress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? 'Pause video' : `Play ${videoName} video`}
        >
          <Text>
            {isPlaying ? (
              <Icon name="pause-circle" size={45} style={{ color: theme.videoPlayer.pause }} />
            ) : (
              <Icon name="play-circle" size={45} style={{ color: theme.videoPlayer.play }} />
            )}
          </Text>
        </TouchableOpacity>
      </View>

      {/* {videoDuration !== null && (
        <View style={styles.controls}>
          <Text>Duration: {Math.floor(videoDuration/1000)}</Text>
        </View>
      )} */}


      <View>
        <Slider
          accessibilityLabel={`Slider for ${videoName} video`}
          style={{ width: 200, height: 40 }}
          thumbTintColor={theme.videoPlayer.thumbTintColor}
          minimumTrackTintColor={theme.videoPlayer.minimumTrackTintColor}
          minimumValue={0}
          maximumValue={1}
          maximumTrackTintColor={theme.videoPlayer.maximumTrackTintColor}
          value={sliderValue}
          onValueChange={(value) => {
            // console.log("sliderChange")
            setSliderValue(value);
            AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => {
              if (isEnabled) {
                // console.log("sliderCompelete")
                if (videoRef.current) {
                  const newPositionMillis = value * videoDuration;
                  videoRef.current.setPositionAsync(newPositionMillis);
                }
              }
            });

          }}
          onSlidingComplete={(value) => {
            // console.log("sliderCompelete")
            if (videoRef.current) {
              const newPositionMillis = value * videoDuration;
              videoRef.current.setPositionAsync(newPositionMillis);
            }
          }}
          accessibilityValue={{
            min: 0,          // The minimum value of the range
            max: 1,          // The maximum value of the range
            now: sliderValue, // The current value within the range
          }}
          importantForAccessibility='yes'
        />
      </View>
    </View>
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
    backgroundColor: 'white',
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
