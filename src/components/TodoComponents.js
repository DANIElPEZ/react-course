import { TodoContext } from '../context/context';
import React from 'react';
import './TodoMainElement.css'

//--------------------General components--------------------------
function TodoMark(){
    const {completedTodos,totalTodos}=React.useContext(TodoContext);
    return(
        <h1 className='task'>Has completado {completedTodos} de {totalTodos} Todos</h1>
    );
}

function TodoFilter(){
    const {searchValue,setSearchValue}=React.useContext(TodoContext);
    return(
        <div className='input'>
            <input
                className='filter'
                placeholder="Cortar rancio"
                value={searchValue} //llama el estado
                onChange={(e)=>{
                    setSearchValue(e.target.value); //actualizamos el estado
                }}
            />
        </div>
    );
}

function TodoList({children}){
    return(
        <ul>
            {children}
        </ul>
    );
}

function TodoLoading(){
    return(
        <div className='loading'></div>
    );
}

function TodoItem({ desc, completed, onComplete, onDelete }) {
    return (
        <li className='card'>
            <div className='options'>
                <span 
                    className={`material-symbols-outlined completed ${completed ? "completed-ok" : ""}`}
                    onClick={onComplete}
                >
                    check_circle
                </span>
                <span 
                    className="material-symbols-outlined delete"
                    onClick={onDelete}
                >
                    delete_forever
                </span>
            </div>
            <p className={`description ${completed ? "description-ok" : ""}`}>{desc}</p>
        </li> 
    );
}

function TodoAddBtn({setOpenModal}){
    return(
        <button className='add' 
        onClick={
            ()=>{
                setOpenModal(state => !state);
            }
        }>
            <span className="material-symbols-outlined">add</span>
        </button>
    );
}

export {
    TodoMark,
    TodoFilter,
    TodoList,
    TodoLoading,
    TodoItem,
    TodoAddBtn
};