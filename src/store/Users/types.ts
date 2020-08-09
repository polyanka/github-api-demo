import { IUserBase } from '@src/model/user';

export enum UsersActionTypesEnum {
  SET_USERS = 'users/SET_USERS',
  SET_LOGIN_FOR_SEARCH = 'users/SET_LOGIN_FOR_SEARCH',
  SET_LOADING = 'users/SET_LOADING',
  SET_ERROR = 'users/SET_ERROR',
}

export type SetUsersType = {
  type: typeof UsersActionTypesEnum.SET_USERS;
  users: IUserBase[];
};

export type SetLoginForSearchType = {
  type: typeof UsersActionTypesEnum.SET_LOGIN_FOR_SEARCH;
  searchLogin: string;
};

export type SetLoadingType = {
  type: typeof UsersActionTypesEnum.SET_LOADING;
};

export type SetErrorType = {
  type: typeof UsersActionTypesEnum.SET_ERROR;
};

export type UsersActionTypes = SetUsersType | SetLoadingType | SetErrorType | SetLoginForSearchType;
