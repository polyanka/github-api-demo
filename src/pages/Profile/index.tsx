import { Grid, Typography } from '@material-ui/core';
import { ErrorMessage, Spiner, UserDataList } from '@src/component';
import { NotFound } from '@src/pages';
import { IAppState } from '@src/store/index';
import { getProfileByLoginAction } from '@src/store/Profile/action';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ReposList } from './ReposList';

export const ProfilePage = (): React.ReactElement => {
  const { user, loading, error } = useSelector((state: IAppState) => state.user);

  const { login }: { login: string } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileByLoginAction(login));
  }, [dispatch, login]);

  const ProfileBlock = () => {
    if (loading) {
      return <Spiner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    if (user == null) {
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
          <ReposList user={user} />
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
