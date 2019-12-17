import React from 'react';
import {connect} from 'react-redux';
import {
  toggleTodo
} from '../redux/actions';

class ToDo extends React.Component {

  render() {
    const {item, toggleTodo, id} = this.props;
    return (
      <div style={{display: 'flex', width: '240px', justifyContent: 'space-between' }}>
        <p>{item.text}</p>
        <p>{item.completed?'true':'false'}</p>
        <button onClick={toggleTodo.bind(null,id)}>toggle</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleTodo
};

export default connect(null, mapDispatchToProps)(ToDo);
