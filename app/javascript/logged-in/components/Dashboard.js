import React from 'react'
import Navbar from 'shared-components/Navbar'

class Dashboard extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Navbar signedIn={true} />
                <h1>This is the logged in page!</h1>
                <a className="btn btn-danger" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
            </React.Fragment>
        );
    }
}

export default Dashboard;


