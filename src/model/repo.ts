export interface IRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  watchers_count: number;
  created_at: string;
  html_url: string;
}

export interface IRepos {
  repos: IRepo[];
}
