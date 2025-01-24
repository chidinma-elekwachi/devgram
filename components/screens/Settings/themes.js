import React, { createContext, useState } from 'react';

export const lightTheme = {
  primaryColor: '#333',
  backgroundColor: '#f7f7f7',
  textColor: '#333',
};

export const darkTheme = {
  primaryColor: '#fff',
  backgroundColor: '#333',
  textColor: '#fff',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
