import {
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  BusinessOutlined,
  EmojiPeopleOutlined,
  LinkOutlined,
  PeopleAltOutlined,
  RoomOutlined,
  StarBorderOutlined,
} from '@material-ui/icons';
import { IUser } from '@src/model/user';
import React from 'react';

export const UserDataList = ({ user }: { user: IUser }) => {
  const name = user.name ? (
    <Typography gutterBottom variant='h5' color='primary'>
      {user.name}
    </Typography>
  ) : null;

  const company = user.company ? (
    <ListItem>
      <ListItemIcon>
        <BusinessOutlined color='primary' />
      </ListItemIcon>

      <ListItemText primary='Company' secondary={user.company} />
    </ListItem>
  ) : null;

  const location = user.location ? (
    <ListItem>
      <ListItemIcon>
        <RoomOutlined color='primary' />
      </ListItemIcon>

      <ListItemText primary='Location city' secondary={user.location} />
    </ListItem>
  ) : null;

  const blog = user.blog ? (
    <ListItem button component='a' href={user.blog} target='_blank'>
      <ListItemIcon>
        <LinkOutlined color='primary' />
      </ListItemIcon>

      <ListItemText primary='Blog' secondary={user.blog} />
    </ListItem>
  ) : null;

  return (
    <Grid container>
      <Grid item xs={12}>
        <CardMedia style={{ height: 240, width: '100%' }} image={user.avatar_url} title={user.login} />
        <CardContent>
          {name}
          <Typography variant='h5'>{user.login}</Typography>
        </CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <PeopleAltOutlined color='primary' />
            </ListItemIcon>

            <ListItemText primary='Followers' secondary={user.followers} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EmojiPeopleOutlined color='primary' />
            </ListItemIcon>

            <ListItemText primary='Following' secondary={user.following} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <StarBorderOutlined color='primary' />
            </ListItemIcon>

            <ListItemText primary='Start Repos' secondary={user.following} />
          </ListItem>

          {blog}
          {location}
          {company}
        </List>
      </Grid>
    </Grid>
  );
};
