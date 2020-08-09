import { IRepo } from '@src/model/repo';

export enum ReposActionTypesEnum {
  SET_REPOS = 'Repos/SET_REPOS',
  SET_LOADING = 'Repos/SET_LOADING',
  SET_ERROR = 'Repos/SET_ERROR',
}

export type SetReposType = {
  type: typeof ReposActionTypesEnum.SET_REPOS;
  repos: IRepo[];
};

export type SetLoadingType = {
  type: typeof ReposActionTypesEnum.SET_LOADING;
};

export type SetErrorType = {
  type: typeof ReposActionTypesEnum.SET_ERROR;
};

export type ReposActionTypes = SetReposType | SetLoadingType | SetErrorType;
