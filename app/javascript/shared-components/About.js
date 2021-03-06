import React from 'react'
import Navbar from './navbar/Navbar'

class About extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Navbar signedIn={this.props.sessionStatus} route={this.props.location.pathname}/>
                <h1 className="fade-in">Stuff</h1>
                <ul className="fade-in">
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </React.Fragment>
        );
    }
}

export default About;


