import { axiosClient } from '@src/api';
import { IRepo } from '@src/model/repo';
import { IAppState } from '@src/store/index';
import { ISort } from '@src/store/types';
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { ReposActionTypes, ReposActionTypesEnum, SetErrorType, SetLoadingType, SetReposType } from './types';

type ThunkActionType = ThunkAction<Promise<ReposActionTypes>, IAppState, null, ReposActionTypes>;
export type ThunkDispatchType = ThunkDispatch<IAppState, null, ReposActionTypes>;

const getStart: ActionCreator<SetLoadingType> = () => {
  return {
    type: ReposActionTypesEnum.SET_LOADING,
  };
};

const getSuccess: ActionCreator<SetReposType> = (repos: IRepo[]) => {
  return {
    type: ReposActionTypesEnum.SET_REPOS,
    repos,
  };
};

const getError: ActionCreator<SetErrorType> = () => {
  return {
    type: ReposActionTypesEnum.SET_ERROR,
  };
};

export const getReposByLoginAction: ActionCreator<ThunkActionType> = (login: string, sort: ISort, page: number) => {
  const params = `sort=${sort.orderBy}&direction=${sort.order}&page=${page}`;

  return async (dispatch: ThunkDispatchType): Promise<ReposActionTypes> => {
    dispatch(getStart());
    try {
      const response = await axiosClient(`/users/${login}/repos?${params}`);

      return dispatch(getSuccess(response.data));
    } catch {
      return dispatch(getError());
    }
  };
};
