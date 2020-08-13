import { user } from '@src/model/__mocks__/user';
import { shallow } from 'enzyme';
import * as React from 'react';

import { UserDataList } from './index';

describe('<UserDataList />', () => {
  it('renders correctly UserDataList component', () => {
    const wrapper = shallow(<UserDataList user={user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
