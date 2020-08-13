import { IRepo } from '../repo';
export const repos: IRepo[] = [
  {
    id: 1,
    name: 'name1',
    description: 'description1',
    created_at: '2021-08-30T21:19:21Z',
    html_url: 'https://www.example1.com',
    stargazers_count: 5,
    watchers_count: 3,
    language: 'JavaScript',
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
  },
];
