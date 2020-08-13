import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { ErrorMessage, SearchPanel, Spiner, UserBaseData } from '@src/component';
import { usePrevious } from '@src/hooks';
import { IUserBase } from '@src/model/user';
import { IAppState } from '@src/store/index';
import { ISort } from '@src/store/types';
import { getUsersAction, setLoginForSearchAction } from '@src/store/Users/action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const sortFields = ['repositories', 'followers', 'joined'];

const SortButton = withStyles({
  root: {
    '& .MuiButton-startIcon': {
      opacity: 0,
    },
    '&.active .MuiButton-startIcon': {
      opacity: 1,
    },
    '&:hover .MuiButton-startIcon': {
      opacity: 0.5,
    },
  },
})(Button);

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

  const UserList = () => {
    if (users?.length) {
      return (
        <>
          {users.map((user: IUserBase) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserBaseData user={user} />
            </Grid>
          ))}
        </>
      );
    }

    return (
      <Grid item xs={12}>
        <h3>We couldn’t find any users</h3>
      </Grid>
    );
  };

  const UserListBlock = () => {
    if (loading) {
      return <Spiner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return <UserList />;
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <SearchPanel searchValue={searchLogin} setSearchValue={handleSetSearchValue} />
      </Grid>

      {users == null ? (
        <Grid item xs={12}>
          <h3>Enter user login</h3>
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            {sortFields.map((sortField, index) => (
              <SortButton
                disabled={!users.length}
                key={index}
                size='large'
                startIcon={sort.orderBy === sortField && sort.order === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
                className={sort.orderBy === sortField ? 'active' : ''}
                onClick={() => handleSort(sortField)}
              >
                {sortField}
              </SortButton>
            ))}
          </Grid>
          <UserListBlock />
        </>
      )}
    </Grid>
  );
};
