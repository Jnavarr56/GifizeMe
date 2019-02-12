import React from 'react'

class RenderedGif extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="card">
                <img className="card-img-top" src={this.props.src} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{this.props.emoji}</p>
                </div>
            </div>
        );

    }
}

export default RenderedGif;