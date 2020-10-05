import React from 'react'

const Input =(props)=> {
    return(
        <div>
            <label>{props.label}</label>
            <input id={props.id} name={props.name} onChange={props.changed} />
        </div>
    );
};

export default Input;