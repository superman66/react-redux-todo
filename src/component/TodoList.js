/**
 * Created by superman on 17/3/6.
 */
import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
        <ul>
          {this.props.todos.map((todo =>
                  <Todo
                      key={todo.id}
                      {...todo}
                      onclick={() => this.props.onTodoClick(todo.id)}
                  />
          ))}
        </ul>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: React.PropTypes.func.isRequired
};

export default TodoList