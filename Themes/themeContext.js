import React, {createContext} from 'react';
import { lightMode } from './defaultThemes'; // Import your default theme

const themeContext = createContext({
    theme: lightMode,
    toggleButtonRef: null,
  });

  export default themeContext;

  
 
  