import React from 'react'
import SideNavButton from './SideNavButton';

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            0: { navText: 'Your Gifs', component: 'GifIndex' },
            1: { navText: 'Make Changes', component: 'GifEdit' },
            2: { navText: 'Create a Gif', component: 'GifCreate' }
        }
    }



    componentDidMount() {

 
    }

    componentDidUpdate() {

 
    }




    render () {

        return (

            <div className="card fade-in-fast sideNav">
                <div className="card-body">
                    <h5 className="card-title">{`Welcome ${this.props.masterState.user_data.first_name}!`}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {Object.keys(this.state).map((x, i) => <SideNavButton becomeId={`cl${i}`} key={`SNB${x}`} currentComponent={this.props.currentComponent} updateDash={this.props.updateDash} componentIndex={i} itemInfo={this.state[x]}/> )}
                </ul>
            </div>
            


        );

    }
    
}

export default SideNav;


