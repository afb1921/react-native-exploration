import {AccessibilityInfo } from 'react-native';

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