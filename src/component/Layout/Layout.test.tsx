import { shallow } from 'enzyme';
import * as React from 'react';

import { Layout } from './index';

describe('<Layout /> ', () => {
  const children = <p>Hello</p>;

  it('renders correctly Layout component', () => {
    const wrapper = shallow(<Layout children={children} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('check render children', () => {
    const wrapper = shallow(<Layout children={children} />);
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
