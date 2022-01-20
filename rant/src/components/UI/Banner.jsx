import React from 'react'
import classes from './Banner.module.css';


const Banner = () => {
    return (
        <section className={classes.container_banner}>
            <h2> {localStorage.username} </h2>
        </section>
    )
}
export default Banner


