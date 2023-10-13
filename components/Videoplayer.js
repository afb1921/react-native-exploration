import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Slider from '@react-native-community/slider';
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
    <View style={styles.container}>
      <Video
        style={styles.video}
        ref={videoRef}
        source={video}
        resizeMode="contain"
        importantForAccessibility="no"
        accessible={false}
        isLooping
        accessibilityLabel={`${videoName}, video screen`}
        shouldPlay={isPlaying}
        onPlaybackStatusUpdate={(status) => {
          if (status.positionMillis && status.durationMillis) {
            setSliderValue(status.positionMillis / status.durationMillis);
          }
        }}
        onError={(error) => console.error('Video Error:', error)}
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
