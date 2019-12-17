import React from 'react';
import {connect} from 'react-redux';
import {
  setVisibilityFilter,
  VisibilityFilters
} from '../redux/actions';

class Visibility extends React.Component {
  render() {
    const {setVisibilityFilter} = this.props;
    return (
      <div>
        <button onClick={setVisibilityFilter.bind(null,VisibilityFilters.SHOW_ALL)}>show All</button>
        <button onClick={setVisibilityFilter.bind(null,VisibilityFilters.SHOW_COMPLETED)}>show Completed</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setVisibilityFilter
};

export default connect(null, mapDispatchToProps)(Visibility);
