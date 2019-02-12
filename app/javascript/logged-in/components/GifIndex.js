import React from 'react'
import RenderedGif from './RenderedGif';

class GifIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleFindMakeAGif = this.handleFindMakeAGif.bind(this);
    }



    componentDidMount() {

 
    }

    componentDidUpdate() {

        if (this.leaving) {

            setTimeout(() => {

                this.props.findMakeAGif();

            }, 500);

        }

 
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

            return (<div className="fade-in rendered-gifs-container">{this.props.masterState.user_gifs.gifs.map((x, i) => <RenderedGif className="fade-in" style={{animationDelay: `${i * .10}s`}} emoji={x.emoji.code} key={`G${i}`} src={x.blobURL} />)}</div>)

            // onClick={() => this.props.sendDialog(x.blobURL)}

        }

    }
    
}

export default GifIndex;


