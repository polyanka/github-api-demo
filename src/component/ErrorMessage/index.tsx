import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export const ErrorMessage = () => {
  return (
    <Grid item spacing={4}>
      <Typography variant='h5' color='error'>
        Typo An Error Occurred, Please Try Again Later!
      </Typography>
    </Grid>
  );
};
