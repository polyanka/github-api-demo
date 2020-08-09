import { IUserState, user } from '@src/store/Profile/reducer';
import { IReposState, repos } from '@src/store/Repos/reducer';
import { IUsersState, users } from '@src/store/Users/reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

export interface IAppState {
  user: IUserState;
  users: IUsersState;
  repos: IReposState;
}

const rootReducer = combineReducers<IAppState>({
  user,
  users,
  repos,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
