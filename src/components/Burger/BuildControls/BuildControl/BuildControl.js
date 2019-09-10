import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button className={classes.Label}>Less</button>
        <button className={classes.More}>More</button>
    </div>
)

export default buildControl;
