import { Grid, Typography } from '@material-ui/core';
import React from 'react';

export const ErrorMessage = ({ message = 'Typo An Error Occurred, Please Try Again Later!' }) => {
  return (
    <Grid item>
      <Typography variant='h5' color='error'>
        {message}
      </Typography>
    </Grid>
  );
};
