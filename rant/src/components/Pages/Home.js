import React from "react";
import Header from '../UI/Header';
import Banner from '../UI/Banner';
import About from './About';
import '../../task.min.css';
import classes from './Home.module.css';

function Home () {
    return (
      <div>
        <div style={{ background: "#5bc0de" }} className={classes.Home}>
        </div>
        <Header />
        <br />
        <Banner />
        <br />
        <About />
        <br />
      </div>

    );
  }
export default Home;
