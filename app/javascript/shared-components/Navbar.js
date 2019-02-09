import React from 'react'
import NavItem from './navbar/NavItem'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    constructor(props) {
        super(props);    
        this.state = {
            navItems: {
                0: { text: 'Home', link: '/' },
                1: { text: 'About', link: '/about' },
                2: { text: 'Technology', link: 'https://github.com/Jnavarr56/GifizeMe' },
            }
        };
    }

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
                        {Object.keys(this.state.navItems).map(x => <NavItem key={`NI${x}`} route={this.props.route} itemInfo={this.state.navItems[x]} />)}
                    </ul>
                    <span className="navbar-text">
                        {this.props.signedIn ? 'log out' : 'log in'}
                        {/* WE NEED TO CREATE SIGN IN / SIGN OUT BUTTONS AND RENDER THEM IN THE LINE ABOVE*/}
                    </span>
                </div>
            </nav>
        );
    }
}

export default Navbar;