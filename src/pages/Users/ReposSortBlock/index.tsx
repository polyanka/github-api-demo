import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { IUserBase } from '@src/model/user';
import { ISort } from '@src/store/types';
import React from 'react';

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

interface IProps {
  users: IUserBase[] | null;
  sort: ISort;
  handleSort: (orderBy: string) => void;
}

export const ReposSortBlock = ({ users, sort, handleSort }: IProps) => {
  return (
    <Grid item xs={12}>
      {sortFields.map((orderBy, index) => (
        <SortButton
          disabled={!users?.length}
          key={index}
          size='large'
          startIcon={sort.orderBy === orderBy && sort.order === 'desc' ? <ArrowDownward /> : <ArrowUpward />}
          className={sort.orderBy === orderBy ? 'active' : ''}
          onClick={() => handleSort(orderBy)}
        >
          {orderBy}
        </SortButton>
      ))}
    </Grid>
  );
};
