/**
 * Created by superman on 17/3/6.
 */
import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
        <ul>
          {this.props.todos.map((value, index) =>
              <Todo
                  key={index}
                  {...value}
                  onClick={() => this.props.onTodoClick(index)}
              />
          )}
        </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList