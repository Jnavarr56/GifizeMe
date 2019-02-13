import React from 'react'
import moment from 'moment'

class RenderedGif extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        
        
        //console.log(moment(this.props.createdAt).format());
        //console.log(    new Date().toUTCString()        );


        return(
            <div className={`card ${(moment.utc().diff(moment.utc(this.props.createdAt))/60000) <= 0.25 ? 'just-created' : ''}`}>
                <img className="card-img-top" src={this.props.src} alt="Card image cap" />
                <span className="card-name">{this.props.name}</span>
                <div className="card-body">
                    <p className="card-text">
                        {this.props.emoji}
                        <br />
                        <i className="fab fa-facebook-messenger"></i>
                    </p>
                </div>
            </div>
        );

    }
}

export default RenderedGif;