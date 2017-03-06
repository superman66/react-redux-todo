/**
 * Created by superman on 17/3/6.
 */
import React, {Component} from 'react'

class Todo extends Component {
  render() {
    return (
        <li
            onClick={this.prop.onClick}
            style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
        >
          {this.props.text}
        </li>
    )
  }
}

Todo.propTypes = {
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onclick: React.PropTypes.func.isRequired
}

export default Todo