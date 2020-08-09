import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { IUserBase } from '@src/model/user';
import React from 'react';
import { Link } from 'react-router-dom';

export const UserBaseData = ({ user: { login, avatar_url } }: { user: IUserBase }) => {
  return (
    <Card style={{ maxWidth: 345, padding: 16 }}>
      <CardContent>
        <CardMedia style={{ height: 140 }} image={avatar_url} title={login} />

        <Typography gutterBottom variant='h5' component='h2'>
          {login}
        </Typography>
      </CardContent>

      <CardActions>
        <Button component={Link} to={`/user/${login}`} color='primary' size='medium' variant='contained'>
          Open
        </Button>
      </CardActions>
    </Card>
  );
};
