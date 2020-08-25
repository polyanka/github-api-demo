import { user } from '@src/model/__mocks__/user';
import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import ReactRouter from 'react-router';

import { ProfilePage } from './index';

const login = 'polyanka';

describe('<ProfilePage />', () => {
  beforeEach(() => {
    jest.spyOn(ReactRouter, 'useParams').mockImplementation(() => ({
      login,
    }));
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
  });

  it('start render <ProfilePage />', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      user: null,
      loading: true,
      error: false,
    });

    const wrapper = shallow(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(1);
    expect(wrapper.find('ErrorMessage')).toHaveLength(0);
    expect(wrapper.find('NotFound')).toHaveLength(0);
    expect(wrapper.find('UserDataList')).toHaveLength(0);
  });

  it('renders correctly ProfilePage component with user data', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      user,
      loading: false,
      error: false,
    });

    const wrapper = shallow(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('ErrorMessage')).toHaveLength(0);
    expect(wrapper.find('NotFound')).toHaveLength(0);
    expect(wrapper.find('UserDataList')).toHaveLength(1);
    expect(wrapper.find('ReposList')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render ErrorMessage', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      user: null,
      loading: false,
      error: true,
    });

    const wrapper = shallow(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('ErrorMessage')).toHaveLength(1);
    expect(wrapper.find('NotFound')).toHaveLength(0);
    expect(wrapper.find('UserDataList')).toHaveLength(0);
    expect(wrapper.find('ReposList')).toHaveLength(0);
  });

  it('render NotFound', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      user: null,
      loading: false,
      error: false,
    });

    const wrapper = shallow(<ProfilePage />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('ErrorMessage')).toHaveLength(0);
    expect(wrapper.find('NotFound')).toHaveLength(1);
    expect(wrapper.find('UserDataList')).toHaveLength(0);
    expect(wrapper.find('ReposList')).toHaveLength(0);
  });
});
