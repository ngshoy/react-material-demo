import React from 'react';
import './styles.scss';
import Header from './Header';
import RoutesDef from './RoutesDef';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbarMargin: theme.mixins.toolbar
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.toolbarMargin} />
      <RoutesDef />
    </div>
  )
}

export default App;