import React from 'react';
import PropTypes from 'prop-types';

import {MdDelete} from 'react-icons/md';
import './styles.css';

const TodoList = ({todos, onToggle, onRemove}) => (

<ul className="todo-list">
  {todos.map((todo) => (
    <li key={todo.id.toString()}>

      <span className={['todo', todo.checked ? "checked" : ""].join(" ")}
      onClick={() => onToggle && onToggle(todo)}
      role="button"
      onKeyPress={() => onToggle && onToggle(todo)}
      tabIndex={0}>
      {todo.title}
      </span>

      <button
        className="remove"
        type="button"
        onClick={() => onRemove && onRemove(todo)}
      >
        <MdDelete size={28}/>
      </button>

      </li>

    ))}
</ul>
);

TodoList.propoTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.number.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequire ,
  onRemove: PropTypes.func.isRequire,
};

export default TodoList;
