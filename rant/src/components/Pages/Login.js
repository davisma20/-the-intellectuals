import React from 'react';
import AuthForm from '../Auth/AuthForm';
import classes from './Login.module.css';

const Login = () => {

  return (
    <div className={classes.wrapper}>
      <AuthForm />
    </div>
  );
};

export default Login;
