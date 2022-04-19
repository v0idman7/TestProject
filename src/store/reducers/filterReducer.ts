import { FilterAction, FilterActionTypes, FilterState } from "../types/filter";

const initialState: FilterState = {
  from: NaN,
  to: NaN,
};

export const filterReducer = (
  state = initialState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_FROM:
      return { ...state, from: action.payload };
    case FilterActionTypes.SET_TO:
      return { ...state, to: action.payload };
    default:
      return state;
  }
};
