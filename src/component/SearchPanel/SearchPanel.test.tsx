import { mount, shallow } from 'enzyme';
import * as React from 'react';

import { SearchPanel } from './index';

describe('<SearchPanel /> ', () => {
  const fn = jest.fn();

  it('renders correctly with default props', () => {
    const wrapper = shallow(<SearchPanel searchValue='' setSearchValue={fn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if prop searchValue set login', () => {
    const wrapper = shallow(<SearchPanel searchValue='login' setSearchValue={fn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange prop with input value', () => {
    const event = {
      preventDefault() {},
      target: { value: 'custom value' },
    };

    const wrapper = mount(<SearchPanel searchValue='' setSearchValue={fn} />);
    wrapper.find('input').simulate('change', event);
    expect(fn).toBeCalledWith('custom value');
  });
});
