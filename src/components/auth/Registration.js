import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    backgroundImage : `url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight : '100vh'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '300px',
    textAlign: 'center',
  },
  button: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));

const Registration = () => {
  const classes = useStyles();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignup = () => {
    // Perform signup logic here
    setIsSubmitted(true);
  };

  return (
    <div className={classes.root}>
      {!isSubmitted ? (
        <>
          <Typography variant="h1" className={classes.title}>
            SignUp
          </Typography>
          <form className={classes.form} onSubmit={handleSignup}>
            <TextField
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Signup
            </Button>
          </form>
        </>
      ) : (
        <>
          <Typography variant="h1" className={classes.title}>
            Successfully Signed Up!
          </Typography>
          <Typography variant="h3" className={classes.title}>
            Please login now.
          </Typography>
        </>
      )}
    </div>
  );
};

export default Registration;