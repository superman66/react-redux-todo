/**
 * Created by superman on 2017/3/20.
 */

import React, {PropTypes} from 'react'
import Todo from './Todo'

function TodoList({onTodoClick, todos}) {
  return (
      <ul>
        {todos.map((todo, index) =>
            <Todo
                onClick={()=>onTodoClick(todo.index)}
                key={index}
                {...todo}
            />
        )}
      </ul>
  )
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default TodoList