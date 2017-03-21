/**
 * Created by superman on 2017/3/20.
 */

import React, {PropTypes} from 'react'

function Todo({onClick, completed, text}) {
  return (
      <li
          onClick={onClick}
          style={{textDecoration: completed ? 'line-through' : 'none'}}
      >
        {text}
      </li>
  )

}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo