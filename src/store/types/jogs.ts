import { JogType, UserType } from "../../shared/constants";

export interface JogsState {
  jogs: Array<JogType>;
  user: UserType | null;
  loading: boolean;
}

export enum JogsActionTypes {
  FETCH_JOGS = "FETCH_JOGS",
  FETCH_USER = "FETCH_USER",
  SET_LOADING = "SET_LOADING",
  ADD_JOG = "ADD_JOG",
  EDIT_JOG = "EDIT_JOG",
  DELETE_JOG = "DELETE_JOG",
}

interface FetchJogsAction {
  type: JogsActionTypes.FETCH_JOGS;
  payload: any;
}

interface FetchUserAction {
  type: JogsActionTypes.FETCH_USER;
  payload: any;
}

interface AddJogAction {
  type: JogsActionTypes.ADD_JOG;
  payload: JogType;
}

interface EditJogAction {
  type: JogsActionTypes.EDIT_JOG;
  payload: JogType;
}

interface DeleteJogAction {
  type: JogsActionTypes.DELETE_JOG;
  payload: number;
}

interface SetLoadingAction {
  type: JogsActionTypes.SET_LOADING;
}

export type JogsAction =
  | FetchJogsAction
  | FetchUserAction
  | AddJogAction
  | EditJogAction
  | DeleteJogAction
  | SetLoadingAction;
