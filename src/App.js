/*import logo from './logo.svg';*/
import logo from './Asutec.png';
import './App.css';
import React, {useState} from 'react';
import NewTodo from './components/NewTodo/index';
import TodoList from './components/TodoList/index';

function App() {

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      {id: new Date().getTime(),
      title: value,
      checked: false
      }
    ]);
  }

  const initialTodos = () => [
    {id: 1, title: 'Estudar Alemão', checked: false},
  ];

  const [todos, setTodos] = useState(initialTodos);

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) => (
        obj.id === todo.id ? {...obj, checked: !todo.checked } : obj
      )
      ));
  };

  const onRemove = (todo) => {
      setTodos(todos.filter((obj) => obj.id !== todo.id));
  };


  return (
    <div className="App">
      <header className="App-header">


      <section className="container">
          <h1 className="title">todo</h1>
          <br/>

            <section className="main">

              <NewTodo onNewTodo={onNewTodo} />

              <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />

            </section>
        </section>


        <p className="title">
          Website Asutec Company
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Começe por aqui
        </a><br/>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
