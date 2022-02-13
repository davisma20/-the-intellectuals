import React from "react";
import TopNav from './components/UI/TopNav';
import SideBar from './components/UI/SideBar';
import Login from './components/Pages/Login';

import { useStateValue } from "./StateProvider";


import "./App.css";

const App = () => {
    const [{loading, loggedIn}, dispatch] = useStateValue();

    return (
      <div className="App">
        {loggedIn && <SideBar />}
        {loggedIn && <TopNav />}
        {!loggedIn && <Login />}
      </div>
    );
  }

export default App;
