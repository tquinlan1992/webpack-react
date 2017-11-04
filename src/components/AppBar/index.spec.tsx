// Link.react-test.js
import * as React from 'react';
import AppBar from './index';
import * as renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    BrowserRouter
} from 'react-router-dom';

const mockHistory = {
    location: {
        pathname: "/first"
    } 
};

test('see app bar', () => {
    let header = "header is working";

    const component = renderer.create(
        <BrowserRouter>
        <MuiThemeProvider>
            <AppBar history={mockHistory} title="Title2" iconClassNameRight="muidocs-icon-navigation-expand-more" header={header} headerChangeText="header changed">Facebook</AppBar>
        </MuiThemeProvider>
        </BrowserRouter>
    );
    debugger;

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.toJSON().children[0].props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
