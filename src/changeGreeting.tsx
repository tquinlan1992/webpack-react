import * as React from 'react';

class ChangeGreeting extends React.Component<any, any> {
    init = false;
    constructor(props: any) {
        super(props);

    }

    changeAdjective = (): void => {
        this.props.changeAdjective(this.init ? 'tommy ' : 'not tommy');
        this.init = !this.init;
    }

    public render() {
        return (
            <div>
            <button onClick={this.changeAdjective}>
                Change Adjective
            </button>
            </div>
        )
    }
}

export default ChangeGreeting;
