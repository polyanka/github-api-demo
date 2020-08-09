import { axiosClient } from '@src/api';
import { IUserBase } from '@src/model/user';
import { IAppState } from '@src/store/index';
import { ISort } from '@src/store/types';
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  SetErrorType,
  SetLoadingType,
  SetLoginForSearchType,
  SetUsersType,
  UsersActionTypes,
  UsersActionTypesEnum,
} from './types';

type ThunkActionType = ThunkAction<Promise<UsersActionTypes>, IAppState, null, UsersActionTypes>;
export type ThunkDispatchType = ThunkDispatch<IAppState, null, UsersActionTypes>;

const getStart: ActionCreator<SetLoadingType> = () => {
  return {
    type: UsersActionTypesEnum.SET_LOADING,
  };
};

const getSuccess: ActionCreator<SetUsersType> = (users: IUserBase[]) => {
  return {
    type: UsersActionTypesEnum.SET_USERS,
    users,
  };
};

const getError: ActionCreator<SetErrorType> = () => {
  return {
    type: UsersActionTypesEnum.SET_ERROR,
  };
};

export interface IGetUsersProps {
  login: string;
  sort: ISort;
}

export const getUsersAction: ActionCreator<ThunkActionType> = (login: string, sort: ISort) => {
  const sortField = `sort=${sort.orderBy}&order=${sort.order}`;

  return async (dispatch: ThunkDispatchType): Promise<UsersActionTypes> => {
    dispatch(getStart());
    try {
      const response: { data: { items: IUserBase[] } } = await axiosClient(`/search/users?${sortField}&q=${login}`);

      return dispatch(getSuccess(response.data.items));
    } catch {
      return dispatch(getError());
    }
  };
};

export const setLoginForSearchAction = (searchLogin: string): SetLoginForSearchType => {
  return {
    type: UsersActionTypesEnum.SET_LOGIN_FOR_SEARCH,
    searchLogin,
  };
};
