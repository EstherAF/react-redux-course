import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// material-ui necesita tap event plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import './style/index.css';
import productos from './devData/productos';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider>
    <App productos={productos} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
