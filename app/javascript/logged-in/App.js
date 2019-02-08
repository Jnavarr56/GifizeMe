import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import About from '../shared-components/About'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;

