import React from 'react'
import SideNav from './SideNav'
import GifEdit from './GifEdit'
import GifCreate from './GifCreate'
import GifIndex from './GifIndex';

class DashContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentIndex: 0
        }
        this.updateDashLocation = this.updateDashLocation.bind(this);
        this.findMakeAGif = this.findMakeAGif.bind(this);
    }



    componentDidMount() {

 
    }

    componentDidUpdate() {

 
    }

    updateDashLocation(i) {
        
        const stateCopy = {...this.state};

        stateCopy.componentIndex = i;
        this.setState(stateCopy);


    }

    getComponentFromIndex(i) {

        console.log('TEAT');

        if (i === 0) {

            return <GifIndex findMakeAGif={this.findMakeAGif} masterState={this.props.masterState}/>

        }

        else if (i === 1) {

            return <GifEdit findMakeAGif={this.findMakeAGif} masterState={this.props.masterState}/>

        }

        else {

            return <GifCreate findMakeAGif={this.findMakeAGif} masterState={this.props.masterState}/>

        }

    }

    findMakeAGif() {

        const stateCopy = {...this.state};

        stateCopy.componentIndex = 2;
        this.setState(stateCopy);

    }



    render () {

        return (

            <React.Fragment>
                <div className="column col-4 col-md-3 col-xl-2">
                    <SideNav updateDash={this.updateDashLocation} currentComponent={this.state.componentIndex} masterState={this.props.masterState}/>
                </div>
                <div className="column col-7">
                    {this.getComponentFromIndex(this.state.componentIndex)}
                </div>
            </React.Fragment>

        );

    }
    
}

export default DashContainer;


