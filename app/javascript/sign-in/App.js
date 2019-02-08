import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/SignIn'
import About from '../shared-components/About'

/*
Here we use render instead of component because we need to pass through a prop
to the component that will in turn be based to the NavBar component inside to
indicate whether or not we should have a log out button.
*/

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <SignIn {...this.props} sessionStatus={false}/>} />
                    <Route exact path="/about" render={() => <About {...this.props} sessionStatus={false} />} />
                </Switch>
            </div>
        );
    }
}

export default App;

