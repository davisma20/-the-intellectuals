import React from "react";
import Login from './components/Pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Message from './components/Pages/Message';
import Video from './components/Pages/Video';
import Register from './components/Pages/Register';
import Home from './components/Pages/Home';
// import { useStateValue } from './StateProvider';

import "./App.css";

const App = () => {
    // const [{ loggedIn } ] = useStateValue();
        // {loggedIn && <SideBar />}
    return (
       <Router>
        <div className="App">
        
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

export default App;
