import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { ErrorMessage } from './index';

describe('<ErrorMessage /> ', () => {
  it('renders correctly ErrorMessage component', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('check prop message by default', () => {
    const wrapper = mount(<ErrorMessage />);
    expect(wrapper.find('h5').text()).toEqual('Typo An Error Occurred, Please Try Again Later!');
  });

  it('check prop message', () => {
    const wrapper = mount(<ErrorMessage message='Error!' />);
    expect(wrapper.find('h5').text()).toEqual('Error!');
  });
});
