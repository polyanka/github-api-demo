import { shallow } from 'enzyme';
import * as React from 'react';

import { UserDataList } from './index';

describe('<UserDataList />', () => {
  const mockUser = {
    avatar_url: 'https://www.example.com/avatar_url.png',
    id: 1,
    login: 'Login',
    name: 'User',
    blog: 'https://www.example-blog.com',
    location: null,
    public_repos: 0,
    public_gists: 2,
    followers: 2,
    following: 0,
    company: null,
  };

  it('renders correctly UserDataList component', () => {
    const wrapper = shallow(<UserDataList user={mockUser} />);
    expect(wrapper).toMatchSnapshot();
  });
});
