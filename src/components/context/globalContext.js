'use client'

import React, { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from '../../Utils/themeConfig';

const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {


  const [isDarkMode, setIsDarkMode] = useState(false);
  const [screen, setScreen] = useState('/home');

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <GlobalContext.Provider 
      value={{
        theme,
        isDarkMode,
        setIsDarkMode,
        screen,
        setScreen,
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if(!context){
    throw new Error(
      'aquele erro la viado'
    )
  }
  return context
}