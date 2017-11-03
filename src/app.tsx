//import Main from './components/Greeter';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style/index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './components/AppBar';
import Theme from './components/Theme';
import getEnvrionmentConfigs from './getEnvrionmentConfigs';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

getEnvrionmentConfigs.then((data: any) => {
    console.log("data", data);
});


const App = () => (
    <Theme>
        <div>
            <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" header="Header is working" headerChangeText="header changed">
            
            </AppBar>
            <div>
                <h1>Home Page </h1>
            </div>
        </div>
    </Theme>
);

const test = (params: { match: any }): any => (
    <div>
        <Link to="/">Go home</Link>
        <h1>
            test
        </h1>
    </div>
);
const home = () => (
    <h1>Home</h1>
);


ReactDOM.render(
    <BrowserRouter>
        <div>
            <App/>
            <Route exact path="" component={home} />
            <Route path="/test" component={test} />
        </div>
    </BrowserRouter>
    , document.getElementById('app')
);
