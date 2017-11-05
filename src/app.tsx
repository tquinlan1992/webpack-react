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
    Link,
    withRouter,
} from 'react-router-dom';
import { Redirect } from 'react-router';

getEnvrionmentConfigs.then((data: any) => {
    console.log("data", data);
});


const App = withRouter(({history}) => (
    <Theme>
        <div>
            <AppBar history={history} title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" header="Header is working" headerChangeText="header changed">

            </AppBar>
            <div>
                <h1>Home Page</h1>
            </div>
        </div>
    </Theme>
));

const second = (params: { match: any }): any => (
    <div>
        <Link to="/">Go home</Link>
        <h1>
            second
        </h1>
    </div>
);

const third = (params: { match: any }): any => (
    <div>
        <Link to="/">Go home</Link>
        <h1>
            third
        </h1>
    </div>
);
const home = () => (
    <h1>Home</h1>
);

const redirectToHomePage = () => (
    <Redirect to="/first" />
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <App/>
            <Route exact path="/" component={redirectToHomePage}/>
            <Route exact path="/first" component={home} />
            <Route path="/second" component={second} />
            <Route path="/third" component={third} />
        </div>
    </BrowserRouter>
    , document.getElementById('app')
);
