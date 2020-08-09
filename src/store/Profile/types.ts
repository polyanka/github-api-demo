import { IUser } from '@src/model/user';

export enum UserActionTypesEnum {
  SET_USER = 'user/SET_USER',
  SET_ERROR = 'user/SET_ERROR',
}

export type SetUserType = {
  type: typeof UserActionTypesEnum.SET_USER;
  user: IUser;
};

export type SetErrorType = {
  type: typeof UserActionTypesEnum.SET_ERROR;
};

export type UserActionTypes = SetUserType | SetErrorType;
