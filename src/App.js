import React from 'react';
import ToDos from './components/todos';
import Visibility from './components/visibility';
import AddToDo from './components/addToDo';

class App extends React.Component {

  render() {
    return (
      <div>
        <Visibility />
        <ToDos />
        <AddToDo />
      </div>

    );
  }
}
export default App;
