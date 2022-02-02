import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS, ADD_CLASS, DELETE_CLASS, EDIT_CLASS } from "../actions";

export const initialState = {
  classes: [],
  isLoading: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        classes: action.payload,
        isLoading: false
      }
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      }
    case DELETE_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      }
    case EDIT_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      }
    default:
      return state
  }
}

export default reducer;