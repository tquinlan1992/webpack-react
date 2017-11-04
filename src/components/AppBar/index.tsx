import * as React from 'react';
import AppBarMaterialUi from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import {
} from 'react-router-dom';

const styles = {
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
    },
};
const qaLogo = require('./qa_logo.png');

class AppBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            header: this.props.header
        }
    }

    changeHeader = (): void => {
        this.setState({ header: this.props.headerChangeText });
    }

    goToTest = ():void => {
        this.props.history.push("/test");
    }

    public render() {
        return (
            <AppBarMaterialUi className='AppBar' onLeftIconButtonTouchTap={this.changeHeader} title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
                <Tabs style={styles.tabs}>
                    <Tab label='first tab'>{this.state.header} First tab a new in docker text</Tab>
                    <Tab label='second tab'>Second tab text <img src={qaLogo} /></Tab>
                    <Tab label='third tab' onActive={this.goToTest}>Third tab text2</Tab>
                </Tabs>
            </AppBarMaterialUi>
        )
    }
}

export default AppBar;
