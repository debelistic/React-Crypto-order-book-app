import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import headerStyles from './headerStyles';


const Nav = () => {
  const classes = headerStyles();

  return (
    <AppBar className={classes.header}>
      <Typography variant="h3" className={classes.logo}>
        Busha
      </Typography>
      <Typography variant="subtitle1" className={classes.logo}>
        Crypto Orders
      </Typography>
    </AppBar>
  );
};

export default Nav;
