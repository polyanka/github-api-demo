import { repos } from '@src/model/__mocks__/repo';
import { user } from '@src/model/__mocks__/user';
import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import ReactRouter from 'react-router';

import { ProfilePage } from './index';

const initialState = {
  user: { user: null, loading: true, error: false },
  repos: {
    repos: null,
    loading: false,
    error: false,
  },
};
const login = 'polyanka';

describe('<ProfilePage />', () => {
  beforeEach(() => {
    jest.spyOn(ReactRouter, 'useParams').mockImplementation(() => ({
      login,
    }));
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
  });

  it('start render <ProfilePage />', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue(initialState);

    const wrapper = mount(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(1);
    expect(wrapper.find('RepoCard')).toHaveLength(0);
  });

  it('render user data and start get repos data', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      ...initialState,
      repos: { ...initialState.repos, loading: true },
      user: { ...initialState.user, loading: false, user },
    });

    const wrapper = mount(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(1);
    expect(wrapper.find('UserDataList')).toHaveLength(1);
    expect(wrapper.find('RepoCard')).toHaveLength(0);
  });

  it('renders correctly ProfilePage component with user data and repos', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      ...initialState,
      repos: { ...initialState.repos, repos },
      user: { ...initialState.user, loading: false, user },
    });
    const wrapper = mount(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('UserDataList')).toHaveLength(1);
    expect(wrapper.find('RepoCard')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render user data and repo not found', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      ...initialState,
      user: { ...initialState.user, loading: false, user },
    });
    const wrapper = mount(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('UserDataList')).toHaveLength(1);
    expect(wrapper.find('RepoCard')).toHaveLength(0);
    expect(wrapper.find('RepoCardBlock').children().find('h3').text()).toBe(
      `We couldn’t find any repositories on ${login}`,
    );
  });
});
