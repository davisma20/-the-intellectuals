import React from 'react';
import AuthForm from '../Auth/AuthForm';
import classes from './Login.module.css';
import { useStateValue } from "../../StateProvider";
import Video from '../Pages/Video';
import SideBar from '../UI/SideBar';


const Login = () => {
    const [{loggedIn}] = useStateValue();

  return (
    <div className={classes.wrapper}>
      {!loggedIn && <AuthForm />}
      {loggedIn && <SideBar />}
      {loggedIn && <Video />}
    </div>
  );
};

export default Login;
