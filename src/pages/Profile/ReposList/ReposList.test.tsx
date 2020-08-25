import { repos } from '@src/model/__mocks__/repos';
import { user } from '@src/model/__mocks__/user';
import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactRedux from 'react-redux';

import { ReposList } from './index';

describe('<ReposList />', () => {
  beforeEach(() => {
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
  });

  it('start render <ReposList />', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      repos: null,
      loading: true,
      error: false,
    });

    const wrapper = shallow(<ReposList user={user} />);

    expect(wrapper.find('Spiner')).toHaveLength(1);
    expect(wrapper.find('ErrorMessage')).toHaveLength(0);
    expect(wrapper.find('RepoCard')).toHaveLength(0);
  });

  it('renders correctly ReposList component with repos data', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      repos,
      loading: false,
      error: false,
    });

    const wrapper = shallow(<ReposList user={user} />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('ErrorMessage')).toHaveLength(0);
    expect(wrapper.find('RepoCard')).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders ErrorMessage', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      repos: null,
      loading: false,
      error: true,
    });

    const wrapper = shallow(<ReposList user={user} />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('ErrorMessage')).toHaveLength(1);
    expect(wrapper.find('RepoCard')).toHaveLength(0);
  });

  it('renders message if not fount repo', () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
      repos: [],
      loading: false,
      error: false,
    });

    const wrapper = shallow(<ReposList user={user} />);

    expect(wrapper.find('Spiner')).toHaveLength(0);
    expect(wrapper.find('ErrorMessage')).toHaveLength(0);
    expect(wrapper.find('RepoCard')).toHaveLength(0);
    expect(wrapper.find('h3').text()).toBe(`We couldn’t find any repositories on ${user.login}`);
  });
});
