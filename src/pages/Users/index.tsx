import { Grid } from '@material-ui/core';
import { ContactlessTwoTone } from '@material-ui/icons';
import { ErrorMessage, SearchPanel, Spiner } from '@src/component';
import { usePrevious } from '@src/hooks';
import { IAppState } from '@src/store/index';
import { ISort } from '@src/store/types';
import { getUsersAction, setLoginForSearchAction } from '@src/store/Users/action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReposSortBlock } from './ReposSortBlock/';
import { UserList } from './UserList/';

export const UsersPage = () => {
  const { users, searchLogin, loading, error } = useSelector((state: IAppState) => state.users);
  const initalState: ISort = { order: 'desc', orderBy: 'repositories' };
  const [sort, changeSort] = useState<ISort>(initalState);
  const prevSearchLoginRef = usePrevious(searchLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchLogin.length) {
      if (prevSearchLoginRef !== searchLogin) {
        const timeoutID = window.setTimeout(() => {
          dispatch(getUsersAction(searchLogin, sort));
        }, 500);

        return () => window.clearTimeout(timeoutID);
      }

      dispatch(getUsersAction(searchLogin, sort));
    }
  }, [searchLogin, sort]);

  const handleSort = (name: string) => {
    const { order, orderBy } = sort;

    if (orderBy === name) {
      changeSort({ ...sort, order: order === 'asc' ? 'desc' : 'asc' });
    } else {
      changeSort({
        order: 'asc',
        orderBy: name,
      });
    }
  };

  const handleSetSearchValue = (searchLogin: string) => {
    dispatch(setLoginForSearchAction(searchLogin));
  };

  const UserListBlock = () => {
    if (users == null && !error) {
      return (
        <Grid item xs={12}>
          <h3>Enter user login</h3>
        </Grid>
      );
    }

    if (loading) {
      return <Spiner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return <UserList users={users} />;
  };

  return (
    <Grid container spacing={4}>
      <SearchPanel searchValue={searchLogin} setSearchValue={handleSetSearchValue} />
      <ReposSortBlock users={users} sort={sort} handleSort={handleSort} />
      <UserListBlock />
    </Grid>
  );
};
