import React, { Component } from 'react'
import classes from './About.module.css';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {profile: ''};
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Your profile has been successfully updated!");
    }
    myChangeHandler = (event) => {
        this.setState({profile: event.target.value});
    }
    render() {
        return (
            <section id="container-about" className={classes.container_about}>
                    <h1>About Me</h1> 
                {/* <form onSubmit={this.mySubmitHandler}>
                <p>Edit Profile</p>
                {this.state.profile}
                <input 
                type='text'
                onChange={this.myChangeHandler}
                />
                <input
                type='submit'
                />
                </form> */}
                    
                   
                
            </section>
        )
    }
}

export default About
