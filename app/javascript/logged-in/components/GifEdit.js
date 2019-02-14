import React from 'react'
import RenderedGifEdit from './RenderedGifEdit';

class GifEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleFindMakeAGif = this.handleFindMakeAGif.bind(this);
    }



    componentDidMount() {

 
    }

    componentDidUpdate() {

 
    }

    handleFindMakeAGif(e) {

        e.preventDefault();

        this.leaving = true;

        this.forceUpdate();
    }
    
    
    render () {

        if (!this.props.masterState.user_gifs.gifs) {

            return (

                <div className={`no-gifs jumbotron ${ this.leaving? 'fade-out' : 'fade-in' }`}>
                    <h1>You don't have any gifs yet!<br/><br/>Click on <a onClick={this.handleFindMakeAGif} href="#">Create a gif</a> to get started.</h1>
                </div>
            );

        }

        else {

            return (<div className="rendered-gifs-container">{this.props.masterState.user_gifs.gifs.map((x, i) => <RenderedGifEdit delete={this.props.delete} updateId={x.gif_record.id} className="fade-in" sendDialog={this.props.sendDialog} createdAt={x.gif_record.created_at} delay={{animationDelay: `${i * .10}s`}} emoji={x.emoji.code} name={x.emoji.name} key={`G${i}`} src={x.blobURL} />)}</div>);

        }

    }
    
}

export default GifEdit;


