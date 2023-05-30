import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    backgroundImage: `url('https://images.unsplash.com/photo-1664575196644-808978af9b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZWxhbmNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight : '100vh'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    color: 'white',
    textAlign: 'center',
  },
  button: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));

const Frontpage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        CodeConnect
      </Typography>
      <Typography variant="h2" className={classes.description}>
        A Platform for Freelancers
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        component ={Link}
        to = '/login'
        onClick={() => {
          // Handle button click event
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Frontpage;