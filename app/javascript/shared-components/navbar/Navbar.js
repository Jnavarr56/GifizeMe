import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
            navItems: {
                0: { text: 'Home', alternateText: 'Dashboard', link: '/', internal: true},
                1: { text: 'About / FAQ', alternateText: 'About / FAQ', link: '/about', internal: true},
                2: { text: 'Technology', alternateText: 'Technology', link: 'https://github.com/Jnavarr56/GifizeMe', internal: false}
            }
        };
    }

    getLogLink = isSignedIn => {

        if (isSignedIn) {

            return <a rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>

        }

        else {

            return <a href="/users/auth/facebook">Log In / Sign Up with Facebook</a>;

        }

    }

    render () {

        return (

            <nav className={"navbar navbar-expand-lg navbar-light nav-color"}>
                <Link className="navbar-brand" to="/">GifizeMe</Link>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarText" 
                        aria-controls="navbarText" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {Object.keys(this.state.navItems).map(x => <NavItem key={`NI${x}`} useAltText={this.props.signedIn} linkPath={this.props.linkPath} itemInfo={this.state.navItems[x]} />)}
                    </ul>
                    
                    <span className="navbar-text nav-link-animated">
                        {this.getLogLink(this.props.signedIn)}
                    </span>
                </div>
            </nav>
        );

    }
    
}

export default Navbar;