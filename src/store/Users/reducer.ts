import { IUserBase } from '@src/model/user';

import { UsersActionTypes, UsersActionTypesEnum } from './types';

export type IUsersState = {
  users: IUserBase[] | null;
  searchLogin: string;
  loading: boolean;
  error: boolean;
};

export const initialState: IUsersState = {
  users: null,
  searchLogin: '',
  loading: false,
  error: false,
};

export const users = (state = initialState, action: UsersActionTypes): IUsersState => {
  switch (action.type) {
    case UsersActionTypesEnum.SET_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UsersActionTypesEnum.SET_USERS: {
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    }
    case UsersActionTypesEnum.SET_LOGIN_FOR_SEARCH: {
      return {
        ...state,
        searchLogin: action.searchLogin,
      };
    }
    case UsersActionTypesEnum.SET_ERROR: {
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
