import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

export const Spiner = () => {
  return (
    <Grid container spacing={4} direction='column' justify='center' alignItems='center' style={{ height: 260 }}>
      <Grid item xs={2}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
