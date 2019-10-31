import { MIRROR } from '../constants/action-types'

const initialState = {
  title: "",
  description: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case MIRROR:
      return {
        ...state,
        [action.payload.name]: action.payload.val
      }
    default:
      return state;
  }
};

export default rootReducer;
