import React, { useState, useEffect } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import ToDoItem from '../components/ToDoItem/ToDoItem'
import {connect} from 'react-redux';
import '../styles/ToDoStyle.scss'
import {addToDo, deleteTodo} from '../store/actions/toDoAction'

const ToDoApp = ({ dispatch, toDoList }) => {
    //const [toDoList, setToDoList] = useState([]);
    const [toDo, setToDo] = useState(
        { itemId: 0, text: '', status: '' }
    );

    const handleChange = event => {
        setToDo({
            ...toDo,
            [event.target.name]: event.target.value,
        });
    }

    // useEffect(() => { console.log(toDoList) }, [toDoList])
    return (
        const formElementsArray = Object.entries(this.state.registrationForm).map(([formElement, value]) => {}
        <>
            <div className='container'> 
                <Input name='text' value={toDo.text} id={toDo.itemId} changed={handleChange} />
                <Button label="Add" clicked={()=>dispatch(addToDo(toDo.text))} />
            </div>
            <div>
                {/* {toDoList.map(item => ( 
                    <ToDoItem clicked={() => dispatch(deleteTodo(item.itemId))} key={item.itemId} 
                    textValue={item.text} status={item.status} />
                ))} */}
            </div>
        </>
    );
};

const mapStateToProps =(state)=>{
    console.log( state.toDoList );
    return { toDoList: state.toDoList  };
};

// const MapDispatchToProps =(dispatch)=>{
//     return{
//         addToDo: () => dispatch(addToDo)
//     }
// }

export default connect(mapStateToProps)(ToDoApp);