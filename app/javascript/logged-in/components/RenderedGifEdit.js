import React from 'react'

class RenderedGifEdit extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        
        
        
        //console.log(moment(this.props.createdAt).format());
        //console.log(    new Date().toUTCString()        );


        return(
            <div className="card fade-in" style={this.props.delay}>
                <img className="card-img-top" src={this.props.src} alt="Card image cap" />
                <span className="card-name">{this.props.name}</span>
                <div className="card-body">
                    <p className="card-text">
                        {this.props.emoji}
                        <br />
                        <button onClick={()=> this.props.delete(this.props.updateId)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>      
                    </p>
                </div>
            </div>
        );

    }
}

export default RenderedGifEdit;