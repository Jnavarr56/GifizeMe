import React from 'react'

class UserImg extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    render () {
    
        return (
            <div className="fade-in card user-info-card">
                <div className="card-body">
                    <img src={this.props.user.img}/>
                </div>
            </div>
        );
    }
    
}

export default UserImg;


