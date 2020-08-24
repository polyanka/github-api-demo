import { Grid } from '@material-ui/core';
import { UserBaseData } from '@src/component';
import { IUserBase } from '@src/model/user';
import React from 'react';

interface IProps {
  users: IUserBase[] | null;
}
export const UserList = ({ users }: IProps) => {
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

  return <h3>We couldn’t find any users</h3>;
};
