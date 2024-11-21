import React from "react";

//custom hook
function useLocalStorage(itemName, initialValue){
     //manejo del localstorage
     const [item, setItem]=React.useState(initialValue);
     
     //crear efecto de carga
     const [loading, setLoading]=React.useState(true);
     const [error, setError]=React.useState(false);

     //usando efectos: son usados para tareas pesadas
     React.useEffect(()=>{
          setTimeout(()=>{
          try{
               const localStorageItem=localStorage.getItem(itemName);
               let parsedItem;
          
               if(!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem=initialValue;
               }else{
                    parsedItem=JSON.parse(localStorageItem);
                    setItem(parsedItem);
               }
          
               setLoading(false);
          }catch(e){
               setLoading(false);
               setError(true);
          }
          },2000);
     },[]);
     
     //funcion para guardar y actualizar localstorage
     const saveItem=(newItems)=>{
          setItem(newItems);
          localStorage.setItem(itemName,JSON.stringify(newItems));
     };

     return {item,saveItem,loading,error};
}

//usando el context
const TodoContext=React.createContext();

function TodoProvider({children}){

     /*estado en react*/
     //[nombre estado, actualizador]
     const {item:todos,saveItem: saveTodos,loading,error}=useLocalStorage('todos-list',[]);//usando custon hooks
     const [searchValue, setSearchValue]=React.useState('');
     const [openModal,setOpenModal]=React.useState(false);

     //estados derivados
     const completedTodos=todos.filter(todo=>todo.completed).length; //todos completados

     const totalTodos=todos.length; //total todos

     //funcion de busquedad
     const searchedTodos=todos.filter((todo)=>{
          const todoText=todo.text.toLowerCase();
          const searchText=searchValue.toLowerCase();
          return todoText.includes(searchText);
     });

     //funcion para añadir todos
     const addTodo=(text)=>{
          const newTodos=[...todos];
          newTodos.push({text:text, completed:false});
          saveTodos(newTodos);
     };

     //funcion para completado de todos
     const completeTodo = (text) => {
          const newTodos=[...todos];
          const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
          newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
          saveTodos(newTodos);
     };

     //funcion para eliminar todos
     const deleteTodo=(text)=>{
          const newTodos=todos.filter((todo)=>todo.text!==text);
          saveTodos(newTodos);
     };

     //retornando estado global del contexto
     return (
          <TodoContext.Provider value={{
               completedTodos,
               totalTodos,
               searchValue,
               setSearchValue,
               searchedTodos,
               completeTodo,
               deleteTodo,
               loading,
               error,
               openModal,
               setOpenModal,
               addTodo
          }}>
               {children}
          </TodoContext.Provider>
     );
}

export {TodoProvider, TodoContext};