import React from 'react'
import Navbar from 'shared-components/navbar/Navbar'

class Dashboard extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Navbar signedIn={true} />
                <h1 className="fade-in">This is the logged in page!</h1>
                <a className="btn btn-danger fade-in" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
            </React.Fragment>
        );
    }
}

export default Dashboard;


