import { TableBody, TableRow } from '@material-ui/core';
import { shallow } from 'enzyme';
import * as React from 'react';

import { IRepoCard, RepoCard } from './index';

describe('<RepoCard />', () => {
  const mockRepo = [
    {
      id: 1,
      name: 'name1',
      description: 'description1',
      created_at: '2021-08-30T21:19:21Z',
      html_url: 'https://www.example1.com',
      stargazers_count: 5,
      watchers_count: 3,
      language: 'JavaScript',
      forks_count: 0,
    },
    {
      id: 2,
      name: 'name2',
      description: 'description2',
      created_at: '2021-09-30T22:56:01Z',
      html_url: 'https://www.example2.com',
      stargazers_count: 1,
      watchers_count: 12,
      language: 'TypeScript',
      forks_count: 3,
    },
  ];

  const props: IRepoCard = {
    repos: mockRepo,
    sort: { order: 'desc', orderBy: 'full_name' },
    changeSort: jest.fn(),
    page: 1,
    pages: 1,
    changePage: jest.fn(),
  };

  it('renders correctly with props', () => {
    const wrapper = shallow(<RepoCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render correctly two TableRow in TableBody', () => {
    const wrapper = shallow(<RepoCard {...props} />);
    expect(wrapper.find(TableBody).children(TableRow).length).toEqual(2);
  });
});
