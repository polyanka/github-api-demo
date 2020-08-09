import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@material-ui/core';
import { OpenInNewOutlined, PeopleAltOutlined, StarBorderOutlined } from '@material-ui/icons';
import { IRepo } from '@src/model/repo';
import { ISort } from '@src/store/types';
import React from 'react';

interface IRepoCard {
  repos: IRepo[];
  sort: ISort;
  changeSort: (sort: ISort) => void;
  page: number;
  pages: number;
  changePage: (page: number) => void;
}

export const RepoCard = ({ repos, sort: { order, orderBy }, changeSort, page, pages, changePage }: IRepoCard) => {
  const handleChangePage = (_event: unknown, newPage: number) => {
    changePage(newPage + 1);
  };

  const getOrder = (name: string) => {
    return orderBy === name && order === 'desc' ? 'asc' : 'desc';
  };

  const getSortTableCell = (name: string, label: string) => {
    return (
      <TableCell sortDirection={orderBy === name ? order : false}>
        <TableSortLabel
          active={orderBy === name}
          direction={orderBy === name ? order : 'desc'}
          onClick={() =>
            changeSort({
              orderBy: name,
              order: getOrder(name),
            })
          }
        >
          {label}
        </TableSortLabel>
      </TableCell>
    );
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {getSortTableCell('full_name', 'Name')}
              <TableCell align='right'>Language</TableCell>
              {getSortTableCell('created_at', 'Сreated')}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.map((repo: IRepo) => (
              <TableRow key={repo.id}>
                <TableCell component='th' scope='row'>
                  <Typography gutterBottom variant='subtitle1'>
                    {repo.name}
                  </Typography>
                  <Typography variant='subtitle2'>{repo.description}</Typography>
                  <Grid container direction='row' alignItems='center'>
                    <Grid item style={{ paddingRight: 4 }}>
                      <PeopleAltOutlined color='primary' fontSize='small' />
                    </Grid>
                    <Grid item style={{ marginRight: 16 }}>
                      {repo.watchers_count}
                    </Grid>
                    <Grid item style={{ paddingRight: 4 }}>
                      <StarBorderOutlined color='primary' fontSize='small' />
                    </Grid>
                    <Grid item>{repo.stargazers_count}</Grid>
                  </Grid>
                </TableCell>
                <TableCell align='right'>{repo.language}</TableCell>
                <TableCell align='right'>{repo.created_at.replace(/[T|Z]+/g, ' ')}</TableCell>
                <TableCell>
                  <IconButton aria-label='open new tab' href={repo.html_url} target='_blank'>
                    <OpenInNewOutlined fontSize='small' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={4}
                count={pages}
                rowsPerPage={30}
                page={page - 1}
                onChangePage={handleChangePage}
                rowsPerPageOptions={[]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
