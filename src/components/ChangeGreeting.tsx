import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ChangeGreeting extends React.Component<any, any> {
    init = false;
    falseValue = 'not tommy';
    trueValue = 'tommy ';
    buttonLabel = 'Change Adjective back';
    constructor(props: any) {
        super(props);

    }


    changeAdjective = (): void => {
        this.props.changeAdjective(this.init ? this.trueValue : this.falseValue);
        this.init = !this.init;
    }

    public render() {
        return (
            <div>
                <RaisedButton onClick={this.changeAdjective}>
                    {this.buttonLabel}
                </RaisedButton>
            </div>
        )
    }
}

export default ChangeGreeting;
