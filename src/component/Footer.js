/**
 * Created by superman on 2017/3/20.
 */

import React, {Component, PropTypes} from 'react'
import {VisibilityFilters} from '../constants/filterTypes'
import FilterLink from '../containers/FilterLink'

class Footer extends Component {

  render() {
    return (
        <p>
          show:
          {' '}
          <FilterLink filter='all'>All</FilterLink>
          {', '}
          <FilterLink filter="completed">Completed</FilterLink>
          {', '}
          <FilterLink filter="active">Active</FilterLink>
        </p>
    )
  }
}

export default Footer