/**
 * Created by superman on 2017/3/20.
 */

import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
        <ul>
          {this.props.todos.map((todo, index) =>
              <Todo
                  {...todo}
                  onClick={() => this.props.onTodoClick(index)}
                  key={index}
              />
          )}
        </ul>
    )
  }
}
TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default TodoList