import React from 'react';
import {connect} from 'react-redux';
import ToDo from './todo';
import {VisibilityFilters} from "../redux/actions";

const setVisibilityFilter = (todos, filter) => {
  if(filter === VisibilityFilters.SHOW_COMPLETED) {
    return todos.filter(t => t.completed)
  }
  return todos;
};

class ToDos extends React.Component {

  render() {
    const {todos} = this.props;

    return (
      todos.map((todo,index) => <ToDo item={todo} id={index} key={index}/>)
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: setVisibilityFilter(state.todos,state.visibilityFilter),
  }
};

export default connect(mapStateToProps, null)(ToDos);
