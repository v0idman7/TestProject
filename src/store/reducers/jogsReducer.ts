import { JogsAction, JogsActionTypes, JogsState } from "../types/jogs";

const initialState: JogsState = {
  jogs: [],
  user: null,
  loading: false,
};

export const jogsReducer = (
  state = initialState,
  action: JogsAction
): JogsState => {
  switch (action.type) {
    case JogsActionTypes.FETCH_JOGS:
      return { ...state, jogs: action.payload, loading: false };
    case JogsActionTypes.FETCH_USER:
      return { ...state, user: action.payload };
    case JogsActionTypes.ADD_JOG:
      return { ...state, jogs: [...state.jogs, action.payload] };
    case JogsActionTypes.EDIT_JOG:
      return {
        ...state,
        jogs: [
          ...state.jogs.filter((jog) => jog.id !== action.payload.id),
          action.payload,
        ],
      };
    case JogsActionTypes.DELETE_JOG:
      return {
        ...state,
        jogs: state.jogs.filter((jog) => jog.id !== action.payload),
      };
    case JogsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
