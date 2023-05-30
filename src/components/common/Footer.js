import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Created with React and Material-UI
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Icons made by{' '}
        <Link href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" className={classes.link}>
          Freepik
        </Link>{' '}
        from{' '}
        <Link href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
          www.flaticon.com
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;