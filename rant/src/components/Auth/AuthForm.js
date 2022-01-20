import React, { useState, useRef } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error] = useState('');
    
    const emailInputRef = useRef();
    
    const passwordInputRef = useRef();
    
    const [isLogin, setIsLogin] = useState(true); //is the user logging in?
    
    const [isLoading, setIsLoading] = useState(false);    

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const APIKEY = process.env.REACT_APP_GoogleApiKey;
        setIsLoading(true);
        let url;
        if (isLogin) {
          url = 
            `'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}'`;
        } else {
          url = 
            `'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}'`;
          fetch(
            url, {
              method: 'POST',
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
              }),
              headers: {
                'Content-Type': 'application/json',
              }
            }
          ).then((res) => {
            setIsLoading(false);
            if (res.ok) {
              return res.json();
              //..
            } else {
              res.json().then((data) => {
                //show an error modal
                let errorMessage = data.error.message;
                throw new Error(errorMessage);
              });
            }
          })
          .then(data => {
            console.log(data);
          })
          .catch((err) => {
              alert(err.message);
          });
        }
      };

    const buttonHandler = () => {
        return <button className={classes.button} ><span>{isLogin ? 'Login' : 'Create Account'}</span></button>;
    };
    return (
      <div className={classes.form}>
        <h1 className={classes.title}>Lets Rant!</h1>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className={classes.input} 
            placeholder="Username" 
            required 
            ref={emailInputRef}/>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className={classes.input} 
            placeholder="Password" 
            required 
            ref={passwordInputRef}/>
          <div align="center">
            <div className={classes.actions}>
              {!isLoading && buttonHandler()}
              {isLoading && <p>Sending request...</p>}
              <button
                type='button'
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? 'Create new account' : 'Login with existing account'}
              </button>
            </div>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    );
};

export default AuthForm;