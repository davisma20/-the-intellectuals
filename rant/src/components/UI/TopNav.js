import React from 'react';
import Message from "../../components/Pages/Message";
import Video from "../../components/Videos/Video";
import Register from "../../components/Pages/Register";
import Login from "../../components/Pages/Login";
import Home from "../../components/Pages/Home";
import classes from "./TopNav.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const TopNav = (props) => {
    return(
      <Router>
        <div className={classes.TopNav}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link className="navbar-brand" to='/Home'>Home</Link>
            <Link className="navbar-brand" to= '/Video'>Video</Link>
            <Link className="navbar-brand" to='/Message'>Messages</Link>
            <Link className="navbar-brand" to= '/Register'>Register</Link>
            <Link className="navbar-brand" to= '/'>LogOut</Link>

          </nav>
          <Switch>
            <Route path='/Home' exact={true} component={Home} />
            <Route path='/Video' exact={true} component={Video} />
            <Route path='/Message' exact={true} component={Message} />
            <Route path='/Register' exact={true} component={Register} />
            <Route path='/' exact={true} component={Login} />
          </Switch>
          <div style={{background: "#ffffff"}} className="Home"></div>
        </div>
      </Router>
        ); 
    }

export default TopNav;
