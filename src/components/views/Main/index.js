import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import mainStyles from './mainStyles';


const Main = () => {
  const classes = mainStyles();

  return (
    <Grid className={classes.root}>
      <Typography variant="h3">
        Hello
      </Typography>
    </Grid>
  );
};

export default Main;
