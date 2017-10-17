import Main from './components/greeter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppBar from './components/AppBar/AppBar';


ReactDOM.render(
    <MuiThemeProvider>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
        </AppBar>
        <div>
            <h1>Home Page </h1>
            <Main />
        </div>
    </MuiThemeProvider>,
    document.getElementById('app')
);
