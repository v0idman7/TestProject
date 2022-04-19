import { JogType } from "../../shared/constants";

export interface EditState {
  jog: JogType | null;
}

export enum EditActionTypes {
  SET_EDIT = "SET_EDIT",
  CLEAR_EDIT = "CLEAR_EDIT",
}

interface SetEditAction {
  type: EditActionTypes.SET_EDIT;
  payload: JogType;
}

interface ClearEditAction {
  type: EditActionTypes.CLEAR_EDIT;
}

export type EditAction = SetEditAction | ClearEditAction;
