import React from 'react';
import { Text } from 'react-native';

export const heading = {

  // Heading Styles
  Heading1: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'red', // Default text color
    };

    return (
      <Text
        {...restProps}
        ref={ref}
        style={[defaultStyles, style]} // Merge defaultStyles with the provided style prop
        accessibilityRole='header'
        accessible={true}
      >
        {children}
      </Text>
    );
  }),

  Heading2: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'red', // Default text color
    };

    return (
      <Text
        {...restProps}
        ref={ref}
        style={[defaultStyles, style]} // Merge defaultStyles with the provided style prop
        accessibilityRole='header'
        accessible={true}
      >
        {children}
      </Text>
    );
  }),

  Heading3: React.forwardRef(({ children, style, ...restProps }, ref) => {
    const defaultStyles = {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'red', // Default text color
    };

    return (
      <Text
        {...restProps}
        ref={ref}
        style={[defaultStyles, style]} // Merge defaultStyles with the provided style prop
        accessibilityRole='header'
        accessible={true}    
      >
        {children}
      </Text>
    );
  }),
};