import React, { useState, useEffect } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import ToDoItem from '../components/ToDoItem/ToDoItem'
import '../styles/ToDoStyle.scss'

const ToDoApp = () => {
    const [toDoList, setToDoList] = useState([]);
    const [toDo, setToDo] = useState(
        { itemId: 0, text: '', status: '' }
    );

    const handleChange = event => {
        setToDo({
            ...toDo,
            [event.target.name]: event.target.value,
        });
    }

    const addListItem =()=> {
        const newToDo = {...toDo};
        newToDo.itemId++;
        setToDo(newToDo);
        const newToDoList = [...toDoList, toDo];
        setToDoList(newToDoList);
    };

    const deleteListItem =(item)=>{
        console.log('deleteListItem: ' + item.itemId);
        const newToDoList = toDoList.filter(listItem => listItem.itemId != item.itemId);
        setToDoList(newToDoList);
        console.log(newToDoList);
    };

    useEffect(() => { console.log(toDoList) }, [toDoList])

    return (
        <div>
            <div className='container'>
                <Input name='text' value={toDo.text} id={toDo.itemId} changed={handleChange} />
                <Button label="Add" clicked={addListItem} />
            </div>
            <div>
                {toDoList.map(item => (
                    <ToDoItem clicked={() => deleteListItem(item)} key={item.itemId} textValue={item.text} status={item.status} />
                ))}
            </div>
        </div>
    );
};

export default ToDoApp;