import Main from './components/Greeter';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './components/AppBar';
import Theme from './components/Theme';

ReactDOM.render(
    <Theme>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" header="Header is working" headerChangeText="header changed">
        </AppBar>
        <div>
            <h1>Home Page </h1>
            <Main />
        </div>
    </Theme>,
    document.getElementById('app')
);
