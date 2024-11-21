import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';
import { TodoContext } from "../context/context";

function Modal({children}){
     //usando portales para manipular el dom
     return ReactDOM.createPortal(
          <div className="modal">
               {children}
          </div>,
          document.getElementById('modal')
     );
}

function TodoForm(){
     const {setOpenModal, addTodo}=React.useContext(TodoContext);
     const [newTodoValue, setNewTodoValue]=React.useState('');

     const onsubmit=(e)=>{
          e.preventDefault();
          addTodo(newTodoValue);
          setOpenModal(false);
     };

     const oncancel=(e)=>{
          setOpenModal(false);
     };

     const onNewTodoValue=(e)=>{
          setNewTodoValue(e.target.value);
     };

     return(
          <form className="todo-form" onSubmit={onsubmit}>
               <h2 className="title">Crea tu nuevo todo</h2>
               <textarea className="todo-text" placeholder="Mirar el suelo"
               value={newTodoValue}
               onChange={onNewTodoValue}/>
               <div className="buttons">
                    <button className="cancel" onClick={oncancel}>Cancelar</button>
                    <button className="accept">Añadir</button>
               </div>
          </form>
     );
}

export {Modal, TodoForm};