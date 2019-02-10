import React from 'react'
import Navbar from 'shared-components/navbar/Navbar'
import DashContainer from './DashContainer'
import Particles from 'react-particles-js';
import { particleConfig2  } from 'extra-data/particle-config'
import gifshot from 'gifshot'
import axios from 'axios'


class Dashboard extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {}
        this.testCapture = this.testCapture.bind(this);
    }

    testCapture() {
        const me = this;
        gifshot.createGIF(
            {
                webcamVideoElement: document.getElementById('thing'),
                'numFrames': 10,

            },
            function(obj) {

                console.log(obj)

                if(!obj.error) {              
                    const stateCopy = {...me.state};
                    stateCopy.src = obj.image
                    me.setState(stateCopy)

                    
                }

            }
        );

    }

    componentDidMount() {

        const dash = this;

        axios.get(`/acquire-user-data/${document.getElementById('app').getAttribute('data-tracker').split("==")[1]}`)
            .then(function (response) {

                console.log(response);

                const newState = response.data;
                newState.stillAcq = false;


                window.fbAsyncInit = function() {
                    FB.init({
                    appId            : response.data.app_id,
                    autoLogAppEvents : true,
                    xfbml            : true,
                    version          : 'v3.2'
                    });
                };

                (function(d, s, id){
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {return;}
                    js = d.createElement(s); js.id = id;
                    js.src = "https://connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));


                setTimeout(() => dash.setState(response.data), 1000);

            })
            .catch(function (error) {

                console.log(error);

            });
 
    }

    componentDidUpdate() {

        if (!this.state.stillAcq) {

            const stateCopy = {...this.state};
            stateCopy.stillAcq = true;

            setTimeout(() => this.setState(stateCopy), 50);

        }

    }


    render () {




            return (

                <React.Fragment>
                    <Navbar userImg={ this.state.user_data ? this.state.user_data.img : null} signedIn={this.props.sessionStatus} linkPath={this.props.location.pathname} />
                    <Particles className={`particles ${Object.keys(this.state).length ? 'fade-in-fast' : 'be-out'}`} params={ particleConfig2 } />
                    <div className="container-fluid">
                        <div className="row"> 
                            { !Object.keys(this.state).length ? <div className="spinner-container fade-in-fast"><span className="spinner-border spinner-fade-getting-gifs text-light" role="status" aria-hidden="true"></span></div> : <DashContainer masterState={this.state}/> } 
                        </div>
                    </div>
                </React.Fragment>

            );
        

        

        /*

         

                <React.Fragment>
                    <Navbar signedIn={this.props.sessionStatus} linkPath={this.props.location.pathname} />
                    <Particles className="particles fade-in" params={ particleConfig2 } />
                    <UserImg className="fade-in" user={this.state.user_data}/>
                    <div className="container-fluid">
                        <div className="row">
                            <h1 className="fade-in">This is the logged in page!</h1>
                            <a className="btn btn-danger fade-in" rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>
                        </div>
                    </div>
                </React.Fragment>
            
        */


    }
    
}

export default Dashboard;


