/**
 * Created by superman on 2017/3/20.
 */

import React, {Component, PropTypes} from 'react'
import {VisibilityFilters} from '../constants/filterTypes'

class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }
    return (
        <a href="#"
           onClick={e=> {
             e.preventDefault();
             this.props.onFilterChange(filter)
           }}
        >
          {name}
        </a>
    )
  }

  render() {
    return (
        <p>
          show:
          {' '}
          {this.renderFilter(VisibilityFilters.SHOW_ALL, 'All')}
          {', '}
          {this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active')}
          {', '}
          {this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
        </p>
    )
  }
}

Footer.propTypes = {
  filter: PropTypes.oneOf([
    VisibilityFilters.SHOW_ALL,
    VisibilityFilters.SHOW_COMPLETED,
    VisibilityFilters.SHOW_ACTIVE
  ]).isRequired,
  onFilterChange: PropTypes.func.isRequired
}
export default Footer