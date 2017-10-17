import * as React from 'react';
import AppBarMaterialUi from 'material-ui/AppBar';
import './index.scss';
const qaLogo = require('./qa_logo.png');

class AppBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    public render() {
        return (
            <div>
            <img src={qaLogo}/>
                <AppBarMaterialUi className='AppBar' title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
                </AppBarMaterialUi>
            </div>
        )
    }
}

export default AppBar;
