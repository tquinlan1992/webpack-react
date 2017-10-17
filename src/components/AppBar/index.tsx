import * as React from 'react';
import AppBarMaterialUi from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
    width: '100%',
  },
};
//import './index.scss';
const qaLogo = require('./qa_logo.png');

class AppBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <div>
                <AppBarMaterialUi className='AppBar' title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
                <Tabs style={styles.tabs}>
                <img src={qaLogo} />
                  <Tab label='first tab'>first tab text</Tab>
                  <Tab label='second tab'>second tab text</Tab>
                  <Tab label='third tab'>third tab text</Tab>
                </Tabs>
                </AppBarMaterialUi>
            </div>
        )
    }
}

export default AppBar;
