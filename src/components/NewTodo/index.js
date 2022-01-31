import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  const[value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () =>{
    if(onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onKeyDown = (event) => {
      if (event.which === ENTER_KEY) {
        submit();
      } else if (event.which === ESCAPE_KEY){
        erase();
      }
  }

  return (
    <input
      className="new-todo"
      placeholder="O que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );

}

NewTodo.prototypes = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo;
