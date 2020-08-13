import { Table, TableBody, TableRow, TableSortLabel } from '@material-ui/core';
import { repos } from '@src/model/__mocks__/repo';
import { shallow } from 'enzyme';
import * as React from 'react';

import { IRepoCard, RepoCard } from './index';

describe('<RepoCard />', () => {
  const props: IRepoCard = {
    repos,
    sort: { order: 'desc', orderBy: 'full_name' },
    changeSort: jest.fn(),
    page: 1,
    pages: 1,
    changePage: jest.fn(),
  };

  it('renders correctly RepoCard component', () => {
    const wrapper = shallow(<RepoCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders one <Table /> components', () => {
    const wrapper = shallow(<RepoCard {...props} />);
    expect(wrapper.find(Table).length).toEqual(1);
  });

  it('renders two <TableRow /> components in TableBody', () => {
    const wrapper = shallow(<RepoCard {...props} />);
    expect(wrapper.find(TableBody).children(TableRow).length).toEqual(2);
  });

  it('simulates click events on <TableSortLabel/>', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<RepoCard {...props} changeSort={mockCallBack} />);
    wrapper.find(TableSortLabel).first().simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
