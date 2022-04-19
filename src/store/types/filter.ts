export interface FilterState {
  from: number;
  to: number;
}

export enum FilterActionTypes {
  SET_FROM = "SET_FROM",
  SET_TO = "SET_TO",
}

interface SetFromAction {
  type: FilterActionTypes.SET_FROM;
  payload: number;
}

interface SetToAction {
  type: FilterActionTypes.SET_TO;
  payload: number;
}

export type FilterAction = SetFromAction | SetToAction;
