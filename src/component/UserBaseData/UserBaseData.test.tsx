import { shallow } from 'enzyme';
import * as React from 'react';

import { UserBaseData } from './index';

describe('<UserBaseData /> ', () => {
  it('renders correctly with props', () => {
    const user = { id: 1, login: 'login', avatar_url: 'avatar_url' };
    const wrapper = shallow(<UserBaseData user={user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
