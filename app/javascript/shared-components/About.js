import React from 'react'

class About extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h1>Stuff</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
                <a className="btn btn-danger" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
            </React.Fragment>
        );
    }
}

export default About;


