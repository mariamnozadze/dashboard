import React, { useState, createContext, useContext } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    //next time user comes, the same color is activated
    localStorage.setItem('themeMode', e.target.value);
  }

  const setColor = (e) => {
    setCurrentColor(e.target.value);

    //next time user comes, the same color is activated
    localStorage.setItem('colorMode', e.target.value);
  }


  //only change the value that has been cliked and set it to true
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    //to have access on the navbar
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor, currentMode,
        setCurrentColor, setCurrentMode
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
