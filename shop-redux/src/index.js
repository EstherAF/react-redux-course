import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// material-ui necesita tap event plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import './style/index.css';

//Redux
import { createStore } from 'redux';
import reducer from './reducers/counter';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//Create Store receives a reducer. The reducer is a function that uses the action 
//to create the new states
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <MuiThemeProvider>
    <App store={store} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
