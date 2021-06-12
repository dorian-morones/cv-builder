import React, { createContext, useReducer } from 'react';
import reducers from "./reducers.js";

const initialState = {
  skillData: {},
  userData: {},
  contactData: {},
}

export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState)

  //Actions
  function updateSkillData(data) {
    dispatch({
      type: 'UPDATE_SKILL_DATA',
      payload: data
    });
  }

  function updateUserData(data) {
    dispatch({
      type: 'UPDATE_USER_DATA',
      payload: data
    });
  }

  function updateContactData(data) {
    dispatch({
      type: 'UPDATE_CONTACT_DATA',
      payload: data
    });
  }

  return (
    <GlobalContext.Provider value={{
      skills: state.skillData,
      contact: state.contactData,
      user: state.userData,
      updateSkillData,
      updateUserData,
      updateContactData
    }}>
      {children}
    </GlobalContext.Provider>
  )
}