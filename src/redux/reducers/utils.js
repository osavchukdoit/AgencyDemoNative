import {
  SET_AGENCY,
  SET_COMPANY,
  SET_EMPLOYER_ID,
  SET_LOADER,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  SET_LOGO_IMAGE,
  SET_STORAGE,
  SET_TOKEN,
  SET_USER_ID,
  SHOW_MODAL,
} from "../actionTypes";

const initialState = {
  loaderStatus: {
    visible: false,
    text: "",
  },
  isLogged: true, //here
  user: "",
  agency: "",
  jwt: "",
  company: "",
  storage: null,
  modal: {
    visible: false,
    modalTitle: "",
    modalBody: "",
    modalSize: "lg",
  },
  logoImage: "",
  userId: "",
};

export const utilityReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADER:
      return {
        ...state,
        loaderStatus: payload,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        isLogged: true,
        user: payload,
      };
    case SET_LOGGED_OUT:
      return {
        ...state,
        user: "",
        jwt: "",
        isLogged: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        jwt: payload,
      };
    case SET_COMPANY:
      return {
        ...state,
        company: payload,
      };
    case SET_AGENCY:
      return {
        ...state,
        agency: payload,
      };
    case SET_STORAGE:
      return {
        ...state,
        storage: payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SET_EMPLOYER_ID:
      return {
        ...state,
        employerId: payload,
      };
    case SET_LOGO_IMAGE:
      return {
        ...state,
        logoImage: payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: payload,
      };
    default:
      return state;
  }
};
