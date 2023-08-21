import React, {createContext} from 'react';
import { lightMode } from './defaultThemes'; // Import your default theme

const themeContext = createContext(lightMode);

export default themeContext