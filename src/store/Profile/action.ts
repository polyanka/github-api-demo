import { axiosClient } from '@src/api';
import { IUser } from '@src/model/user';
import { IAppState } from '@src/store/reducer';
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { SetErrorType, SetUserType, UserActionTypes, UserActionTypesEnum } from './types';

type ThunkActionType = ThunkAction<Promise<UserActionTypes>, IAppState, null, UserActionTypes>;
export type ThunkDispatchType = ThunkDispatch<IAppState, null, UserActionTypes>;

const getSuccess: ActionCreator<SetUserType> = (user: IUser) => {
  return {
    type: UserActionTypesEnum.SET_USER,
    user,
  };
};

const getError: ActionCreator<SetErrorType> = () => {
  return {
    type: UserActionTypesEnum.SET_ERROR,
  };
};

export const getProfileByLoginAction: ActionCreator<ThunkActionType> = (login: string) => {
  return async (dispatch: ThunkDispatchType): Promise<UserActionTypes> => {
    try {
      const response = await axiosClient(`/users/${login}`);
      return dispatch(getSuccess(response.data));
    } catch {
      return dispatch(getError());
    }
  };
};
