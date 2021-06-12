const reducers = (state, action) => {
  switch (action.type) {
    case "UPDATE_SKILL_DATA":
      return {
        ...state,
        skillData: action.payload,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "UPDATE_CONTACT_DATA":
      return {
        ...state,
        contactData: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;