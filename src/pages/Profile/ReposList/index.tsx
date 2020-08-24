import { ErrorMessage, RepoCard, Spiner } from '@src/component';
import { IUser } from '@src/model/user';
import { IAppState } from '@src/store/index';
import { getReposByLoginAction } from '@src/store/Repos/action';
import { ISort } from '@src/store/types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  user: IUser;
}

export const ReposList = ({ user }: IProps) => {
  const { repos, loading, error } = useSelector((state: IAppState) => state.repos);

  const initalState: ISort = { order: 'desc', orderBy: 'full_name' };
  const [sort, changeSort] = useState<ISort>(initalState);
  const [page, changePage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReposByLoginAction(user.login, sort, page));
  }, [dispatch, user, sort, page]);

  if (loading) {
    return <Spiner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!repos?.length) {
    return <h3>We couldn’t find any repositories on {user.login}</h3>;
  }

  return (
    <RepoCard
      repos={repos}
      sort={sort}
      changeSort={changeSort}
      page={page}
      pages={user.public_repos}
      changePage={changePage}
    />
  );
};
