// Link.react-test.js
import * as React from 'react';
import AppBar from './index';
import * as renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('see app bar', () => {
    let header = "header is working";

    const component = renderer.create(
        <MuiThemeProvider>
            <AppBar title="Title2" iconClassNameRight="muidocs-icon-navigation-expand-more" header={header} headerChangeText="header changed">Facebook</AppBar>
        </MuiThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();

    console.log("tree.props.onClick", tree.props.onClick);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
