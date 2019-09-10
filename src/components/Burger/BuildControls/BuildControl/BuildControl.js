import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button
            className={classes.Label}
            onClick={props.remove}
            disabled={props.disabled}>
                Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}>
                More
        </button>
    </div>
)

export default buildControl;
