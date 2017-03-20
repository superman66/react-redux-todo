/**
 * Created by superman on 2017/3/20.
 */

import React, {PropTypes} from 'react'
import Todo from './Todo'

function TodoList({onTodoClick, todos}) {
  return (
      <ul>
        {todos.map(todo =>
            <Todo
                onClick={()=>onTodoClick(todo.id)}
                key={todo.id}
                {...todo}
            />
        )}
      </ul>
  )
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default TodoList