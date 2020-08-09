import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' noWrap>
          MyGitHub
        </Typography>
        <Link component={RouterLink} to='/' style={{ color: '#fff', paddingLeft: 16 }}>
          Users
        </Link>
      </Toolbar>
    </AppBar>
  );
};
