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
        this.mayRedirect = false;
    }



    componentDidMount() {

        this.mayRedirect = true;
        
    }

    componentDidUpdate() {

        document.querySelector('.col-4').classList.remove('saving');
        
    }

    updateDashLocation(i) {
        
        const stateCopy = {...this.state};

        stateCopy.componentIndex = i;
        this.setState(stateCopy);

    }

    getComponentFromIndex(i) {

        if (i === 0) {

            return <GifIndex sendDialog={this.props.sendDialog}findMakeAGif={this.findMakeAGif} masterState={this.props.masterState}/>

        }

        else if (i === 1) {

            return <GifEdit findMakeAGif={this.findMakeAGif} masterState={this.props.masterState}/>

        }

        else {

            return <GifCreate afterSaveRedirect={this.updateDashLocation} regainData={this.props.regainData} findMakeAGif={this.findMakeAGif} masterState={this.props.masterState}/>

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
                <div className="column col-4 col-md-2 col-xl-1">
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


