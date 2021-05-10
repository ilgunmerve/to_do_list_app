import React, { useState, useEffect } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import ToDoItem from '../components/ToDoItem/ToDoItem'
import {connect} from 'react-redux';
import '../styles/ToDoStyle.scss'
import {addToDo, deleteTodo} from '../store/actions/toDoAction'

const ToDoApp = ({ dispatch, toDoList}) => {
    const [toDo, setToDo] = useState(
        { itemId: 0, text: '', status: '' }
    );

    const handleChange = event => {
        setToDo({
            ...toDo,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <>
            <div className='container'> 
                <Input name='text' value={toDo.text} id={toDo.itemId} changed={handleChange} />
                <Button label="Add" clicked={() => dispatch(addToDo(toDo.text))} />
            </div>
            <div>
                {toDoList.map(item => ( 
                    <ToDoItem clicked={() => dispatch(deleteTodo(item.itemId))} key={item.itemId} 
                    textValue={item.text} status={item.status} />
                ))}
            </div>            
        </>
    );
};

const mapStateToProps =(state)=>{
   // console.log( state.toDoListReducer.toDoList );
    return { toDoList: state.toDoListReducer.toDoList };
};


export default connect(mapStateToProps)(ToDoApp);
