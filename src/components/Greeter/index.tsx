import * as moment from 'moment';
import * as React from 'react';
import ChangeGreetingToDave from '../ChangeGreetingToDave';

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {adjective: 'best one'};
    }

    changeAdjective = (adjective: string) => {
        this.setState( { adjective })
    }

    public render() {
        const day = moment().format('dddd');
        const greeting = 'Have the ' + this.state.adjective + day + '!';
        return (
            <div>
            <p>{ greeting } </p>
            <ChangeGreetingToDave changeAdjective={ this.changeAdjective }/>
            </div>
        )
    }
}

export default Main;
