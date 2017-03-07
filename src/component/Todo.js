/**
 * Created by superman on 17/3/6.
 */
import React, {Component} from 'react'

class Todo extends Component {
  render() {
    return (
        <li
            onClick={this.props.onClick}
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none',
              cursor: this.props.completed ? 'default': 'pointer'
            }}
        >
          {this.props.text}
        </li>
    )
  }
}

Todo.propTypes = {
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Todo