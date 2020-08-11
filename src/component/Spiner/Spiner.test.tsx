import { shallow } from 'enzyme';
import * as React from 'react';

import { Spiner } from './index';

describe('<Spiner />', () => {
  it('renders correctly Spiner component', () => {
    const wrapper = shallow(<Spiner />);
    expect(wrapper).toMatchSnapshot();
  });
});
