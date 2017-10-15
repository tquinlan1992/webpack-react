import Main from './greeter';
import './index.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <div>
        <h1>Home Page </h1>
        <Main />
    </div>,
    document.getElementById('app'));
