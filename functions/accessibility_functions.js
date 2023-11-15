import {AccessibilityInfo, Alert } from 'react-native';

//Reset Scroll View to the top of the page
//================================================================
//Takes scrollRef, reference of scrollView
export function resetScroll(scrollRef){ 
    if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0 });
      }
}
//================================================================

//Set Accessibility Focus
//================================================================
//elementRef, reference of element to focus on
//delay before executing focus
export function accessibilityFocus(elementRef, delay){
    setTimeout(() => {
      if (elementRef.current) {
        const reactTag = elementRef.current._nativeTag;
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        
      }
    }, delay)
}
//================================================================

export function consolelogScreenReaderStatus(){
  AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => {
    if (isEnabled) {
      console.log('Screen reader is enabled');
    } else {
      console.log('Screen reader is not enabled');
    }
  });
}

//================================================================

export function announceScreenReaderStatus(){
  AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => {
    if (isEnabled) {
      const delay = 250
      setTimeout(() => {
        AccessibilityInfo.announceForAccessibility("Screen reader is enabled")
      }, delay);
      
    } else {
      Alert.alert("Screen reader is not enabled")
    }
  });
}

