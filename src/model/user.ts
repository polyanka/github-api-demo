export interface IUserBase {
  id: number;
  login: string;
  avatar_url: string;
}

export interface IUsers {
  users: IUserBase[];
}

export interface IUser extends IUserBase {
  name: string;
  blog: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  company: string;
}
