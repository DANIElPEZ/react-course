import React from 'react';
import './App.css';
import { TodoMark, TodoFilter, TodoList, TodoLoading, TodoItem, TodoAddBtn } from './components/TodoComponents';
import { TodoProvider, TodoContext } from './context/context';
import { Modal, TodoForm } from './components/modal';

function App() {

  return (
    //app dentro del contexto global
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

function AppUi() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <div className="App">
      <TodoMark />

      <TodoFilter />
      <TodoList>
        {loading && <TodoLoading />}
        {error && <p>Desesperate, se destruyo tu disco</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea tu primer todo</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            desc={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoAddBtn setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}

export default App;