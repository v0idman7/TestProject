import { EditAction, EditActionTypes, EditState } from "../types/edit";

const initialState: EditState = {
  jog: null,
};

export const editReducer = (
  state = initialState,
  action: EditAction
): EditState => {
  switch (action.type) {
    case EditActionTypes.SET_EDIT:
      return { jog: action.payload };
    case EditActionTypes.CLEAR_EDIT:
      return { jog: null };
    default:
      return state;
  }
};
