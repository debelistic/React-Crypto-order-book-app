import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// import { log } from 'debug';
import mainStyles from './mainStyles';
import Orders from './apiResponse';


const Main = () => {
  const classes = mainStyles();

  return (
    <Grid className={classes.root}>
      <Typography variant="h3">
        <Orders />
      </Typography>
    </Grid>
  );
};

export default Main;
