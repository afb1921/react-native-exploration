import { useRef } from 'react';
import { AccessibilityInfo } from 'react-native';

const useAccessibilityAnnouncement = (delayTime = 1000) => {
  const isAnnouncingRef = useRef(false);

  const announceWithPriority = (announcement) => {
    if (isAnnouncingRef.current) {
      return; // Already announcing, skip the new announcement
    }

    isAnnouncingRef.current = true;
    AccessibilityInfo.announceForAccessibility(announcement);

    setTimeout(() => {
      isAnnouncingRef.current = false;
    }, delayTime);
  };

  return announceWithPriority;
};

export default useAccessibilityAnnouncement;
