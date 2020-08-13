import { Grid, Typography } from '@material-ui/core';
import { RepoCard, Spiner, UserDataList } from '@src/component';
import { NotFound } from '@src/pages';
import { IAppState } from '@src/store/index';
import { getProfileByLoginAction } from '@src/store/Profile/action';
import { getReposByLoginAction } from '@src/store/Repos/action';
import { ISort } from '@src/store/types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const ProfilePage = (): React.ReactElement => {
  const {
    user: { user: user, loading: isLoadingUser, error: isErrorUser },
    repos: { repos, loading: isLoadingRepos, error: isErrorRepos },
  } = useSelector((state: IAppState) => state);
  const { login }: { login: string } = useParams();

  const initalState: ISort = { order: 'desc', orderBy: 'full_name' };
  const [sort, changeSort] = useState<ISort>(initalState);
  const [page, changePage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileByLoginAction(login));
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getReposByLoginAction(login, sort, page));
    }
  }, [user, sort, page]);

  const RepoCardBlock = () => {
    if (isLoadingRepos) {
      return <Spiner />;
    }

    if (isErrorRepos || !repos?.length) {
      return (
        <Grid item>
          <h3>We couldn’t find any repositories on {login}</h3>
        </Grid>
      );
    }

    return user ? (
      <RepoCard
        repos={repos}
        sort={sort}
        changeSort={changeSort}
        page={page}
        pages={user.public_repos}
        changePage={changePage}
      />
    ) : null;
  };

  const ProfileBlock = () => {
    if (isLoadingUser) {
      return <Spiner />;
    }

    if (isErrorUser || !user) {
      return <NotFound />;
    }

    return (
      <>
        <Grid item xs={12} md={4}>
          <UserDataList user={user} />
        </Grid>
        <Grid container item xs={12} md={8} direction='column' alignItems='stretch'>
          <Typography gutterBottom variant='h5'>
            Repositories
          </Typography>
          <RepoCardBlock />
        </Grid>
      </>
    );
  };

  return (
    <Grid container spacing={4}>
      <ProfileBlock />
    </Grid>
  );
};
