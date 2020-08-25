import { IRepo } from '@src/model/repo';

import { ReposActionTypes, ReposActionTypesEnum } from './types';

export type IReposState = {
  repos: IRepo[] | null;
  loading: boolean;
  error: boolean;
};

export const initialState: IReposState = {
  repos: null,
  loading: true,
  error: false,
};

export const repos = (state = initialState, action: ReposActionTypes): IReposState => {
  switch (action.type) {
    case ReposActionTypesEnum.SET_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case ReposActionTypesEnum.SET_REPOS: {
      return {
        ...state,
        loading: false,
        repos: action.repos,
      };
    }

    case ReposActionTypesEnum.SET_ERROR: {
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
