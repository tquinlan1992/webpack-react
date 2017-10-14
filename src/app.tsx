import greeter from './greeter';
import './index.scss';

greeter();

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <p>{greeter()}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
