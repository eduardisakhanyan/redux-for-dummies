import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/index';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './redux/actions'
// import {store} from './redux/index';
//
// // Log the initial state
// console.log(store.getState());
//
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
//
// // Dispatch some actions
// console.log('Added TODO');
// store.dispatch(addTodo('Learn about actions'));
// console.log('Added TODO');
// store.dispatch(addTodo('Learn about reducers'));
// console.log('Added TODO');
// store.dispatch(addTodo('Learn about store'));
// console.log('Toggle firs item');
// store.dispatch(toggleTodo(0));
// console.log('Toggle second item');
// store.dispatch(toggleTodo(1));
// console.log('Change visibility Filter');
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//
// // Stop listening to state updates
// unsubscribe();
