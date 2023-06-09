import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={classes.logo}>
          <img src="data:image/png;base64,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" alt="CodeConnect Logo" height="32" />
          <Typography variant="h6" className={classes.title}>
            CodeConnect
          </Typography>
        </Link>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/registration">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;