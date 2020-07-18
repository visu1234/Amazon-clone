import { createContext } from "react";

// set up data layer

import React, { useContext, useReducer } from "react";

// This is Data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use inside of a component
export const useStateValue = () => useContext(StateContext);
