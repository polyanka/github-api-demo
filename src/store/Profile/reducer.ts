import { IUser } from '@src/model/user';

import { UserActionTypes, UserActionTypesEnum } from './types';

export type IUserState = {
  user: IUser | null;
  loading: boolean;
  error: boolean;
};

export const initialState: IUserState = {
  user: null,
  loading: true,
  error: false,
};

export const user = (state = initialState, action: UserActionTypes): IUserState => {
  switch (action.type) {
    case UserActionTypesEnum.SET_USER: {
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    }
    case UserActionTypesEnum.SET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
