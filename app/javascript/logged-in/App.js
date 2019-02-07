import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './Test'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Test} />
                    <Route exact path="/test" component={Test} />
                </Switch>
            </div>
        );
    }
}

export default App;

