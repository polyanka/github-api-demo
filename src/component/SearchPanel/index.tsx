import { FormControl, Grid, InputLabel, OutlinedInput } from '@material-ui/core';
import React from 'react';

interface IProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchPanel = ({ setSearchValue, searchValue }: IProps) => {
  return (
    <Grid item xs={12}>
      <FormControl variant='outlined' fullWidth>
        <InputLabel htmlFor='Search'>Login</InputLabel>
        <OutlinedInput value={searchValue} onChange={(event) => setSearchValue(event.target.value)} labelWidth={40} />
      </FormControl>
    </Grid>
  );
};
