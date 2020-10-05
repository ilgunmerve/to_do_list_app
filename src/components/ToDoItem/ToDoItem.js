import React from 'react'
import './ToDoItem.scss'
import deleteIcon from '../../icons/delete.png'

const ToDoItem =(props)=> {
    const {textValue, status, clicked} = props; //destructuring
    
    return(
        <div className="ListItem">
            <p className="col-75">{textValue}</p>
            <p className="col-25">{status}</p>
            <img src={deleteIcon} onClick={clicked}/>
        </div>
    );
};

export default ToDoItem;