import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    maxWidth: 400,
    margin: '0 auto',
    // marginTop: 110,
    border: '1px solid dodgerblue',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  box:{
    backgroundImage : `url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight : '100vh',
  }
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const poolData = {
    UserPoolId: 'us-west-2_Iu7EB9yDh',
    ClientId: '6udlrh3tjahiqf8s9sd909f4ee',
    ClientSecret :'25rcbhudfuoep60giphf59qs1dso1pghunh98vfgucl5jo2f458'
  };
  const userPool = new CognitoUserPool(poolData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
      SecretHash : calculateSecretHash(email,poolData.ClientId,poolData.ClientSecret)
    });
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    console.log(cognitoUser)

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Login successful');
        // Redirect to sponsor dashboard upon successful login
        navigate('/sponsor/dashboard');
      },
      onFailure: (error) => {
        console.log('Login error:', error);
        setError('Incorrect email or password');
      },
    });
  };
  const calculateSecretHash = (username, clientId, clientSecret) => {
    const message = username + clientId;
    const hash = CryptoJS.HmacSHA256(message, clientSecret);
    return hash.toString(CryptoJS.enc.Base64);
  };

  return (
    <div className = {classes.box}>
    <Paper className={classes.paper}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Login
        </Button>
        {error && <Typography color="error">{error}</Typography>}
      </form>
    </Paper>
    </div>
  );
};

export default Login;