import React, {createContext} from 'react';
import { lightMode, darkMode } from './defaultThemes'; // Import your default theme

const themeContext = createContext({
    theme: "",
    toggleButtonRef: null,
  });

  export default themeContext;

  
 
  