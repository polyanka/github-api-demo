import { shallow } from 'enzyme';
import * as React from 'react';

import { Header } from './index';

describe('<Header />', () => {
  it('renders correctly Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
