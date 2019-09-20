import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import footerStyles from './footerStyles';


const Footer = () => {
  const classes = footerStyles();

  return (
    <Grid className={classes.root}>
      <Typography variant="subtitle2" className={classes.content}>
       Busha &copy; 2019
      </Typography>
    </Grid>
  );
};

export default Footer;
