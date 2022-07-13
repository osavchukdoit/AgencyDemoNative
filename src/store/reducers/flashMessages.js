import { ADD_FLASH_MESSAGE, CLEAR_ALL_FLASH_MESSAGES } from "../actionTypes";

const initialState = [];

export const flashMessagesReducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_FLASH_MESSAGE:
      return [...state, payload];
    case CLEAR_ALL_FLASH_MESSAGES:
      return [];
    default:
      return state;
  }
};
