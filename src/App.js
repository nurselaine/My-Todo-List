import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App (props) {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
      filterHandler();
  }, [todos, status]);


// setFilteredTodos is not updating filterTodos state
  const filterHandler = () => {
      let filteredArray = [];
      switch(status) {
          case "completed":
              filteredArray = todos.filter( todo => todo.completed);
              break;
          case "uncompleted":
              filteredArray = todos.filter( todo => !todo.completed);
              break;
          default:
              filteredArray = todos;
              break;
      }
      setFilteredTodos(filteredArray);
  }

    return (
        <div className="App">
          <header>
            <h1>My TO DO List</h1>
          </header>
          <Form inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}/>
          <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}/>
        </div>
    );
}

export default App;
