import { Grid } from '@material-ui/core';
import { SentimentDissatisfiedOutlined } from '@material-ui/icons/';
import React from 'react';

export const NotFound = () => {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <h2>Page not found</h2>
      </Grid>
      <Grid item>
        <SentimentDissatisfiedOutlined fontSize='large' />
      </Grid>
    </Grid>
  );
};
