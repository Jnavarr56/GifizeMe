import React from 'react'

class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>This is the {this.props.displayText}!</div>
                <a className="btn btn-danger" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
            </React.Fragment>
        )
    }
}

export default App;