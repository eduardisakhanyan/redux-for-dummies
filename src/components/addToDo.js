import React from 'react';
import {connect} from 'react-redux';
import {
  addTodo,
} from '../redux/actions';

class AddToDo extends React.Component {

  state = {
    textValue: '',
  };

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  render() {
    const {addTodo} = this.props;
    const {textValue} = this.state;
    return (
      <div >
        <input type={'text'} name={'textValue'} onChange={this._handleChange}/>
        <button onClick={addTodo.bind(null,textValue)}>add</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddToDo);
