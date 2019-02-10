import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import About from '../shared-components/About'

class App extends React.Component {

    render () {

        return (

            <Switch>
                <Route exact path="/" render={() => <Dashboard {...this.props} sessionStatus={true}/>} />
                <Route exact path="/about" component={About} />
            </Switch>

        );

    }

}

export default App;



