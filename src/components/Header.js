import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const Header = () => {
  const classes = useStyles();

  const [ scrolling, setScrolling ] = useState(false);
  const [ scrollTop, setScrollTop ] = useState(0);

  const onScroll = e => {
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
    setScrollTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
    }
  });

  return (
    <Grow in={!scrolling}>
      <AppBar>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Button className={classes.button}><NavLink to='/'>Home</NavLink></Button>
          </Grid>
          <Grid item xs={1}>
            <Button className={classes.button}><NavLink to='/About'>About</NavLink></Button>
          </Grid>
        </Grid>
      </AppBar>
    </Grow>
  );
};

export default Header;