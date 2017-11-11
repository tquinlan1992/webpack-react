import * as React from 'react';
import AppBarMaterialUi from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';

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

    goToRoute = (evt: any): void => {
        console.log("evt", evt);
        this.props.history.push(evt.props.value);
    }

    public render() {
        return (
            <AppBarMaterialUi className='AppBar' onLeftIconButtonTouchTap={this.changeHeader} title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
                <Tabs style={styles.tabs} value={this.props.history.location.pathname}>
                    <Tab label='first tab' value="/first" onActive={this.goToRoute}>{this.state.header} First tab a in docker text</Tab>
                    <Tab label='second tab' value="/second" onActive={this.goToRoute}>Second tab text <img src={qaLogo} /></Tab>
                    <Tab label='third tab' value="/third" onActive={this.goToRoute}>Third tab text2</Tab>
                </Tabs>
            </AppBarMaterialUi>
        )
    }
}

export default AppBar;
