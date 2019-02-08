import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn'
import About from '../shared-components/About'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;

