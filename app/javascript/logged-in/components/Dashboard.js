import React from 'react'
import Navbar from 'shared-components/navbar/Navbar'
import DashContainer from './DashContainer'
import Particles from 'react-particles-js';
import { particleConfig2  } from 'extra-data/particle-config'
import axios from 'axios'


class Dashboard extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {}

        this.sendDialog = this.sendDialog.bind(this);
        this.performDataFetch = this.performDataFetch.bind(this);
        this.performDelete = this.performDelete.bind(this);

    }

    performDataFetch(redirect) {

        const dash = this;

        axios.get(`/acquire-user-data/${document.getElementById('app').getAttribute('data-tracker').split("==")[1]}`)
            .then(function (response) {

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

                if (response.data.user_gifs.gifs) {

                    response.data.user_gifs.gifs = response.data.user_gifs.gifs.sort((a, b) => b.gif_record.id - a.gif_record.id);

                }

                setTimeout(() => dash.setState(response.data), 1000);

            })
            .catch(function (error) {

                console.log(error);

            });

    }

    performDelete(i) {

        const dash = this;

        let token = document.getElementsByName('csrf-token')[0].getAttribute('content');
        axios.defaults.headers.common['X-CSRF-Token'] = token;
        axios.defaults.headers.common['Accept'] = 'application/json';

        axios.delete('/delete', {

            data: { delete_id: i  }

        }).then(function(response) {

            console.log(response);

            if (response.data.user_gifs.gifs) {

                response.data.user_gifs.gifs = response.data.user_gifs.gifs.sort((a, b) => b.gif_record.id - a.gif_record.id);

            }

            setTimeout(() => dash.setState(response.data), 1000);  

        }).catch(function(response) {

            console.log(response);

        });

    }

    componentDidMount() {

        this.performDataFetch();
 
    }

    componentDidUpdate() {

        if (!this.state.stillAcq) {

            const stateCopy = {...this.state};
            stateCopy.stillAcq = true;

            setTimeout(() => this.setState(stateCopy), 50);

        }

    }

    sendDialog(url) {

        console.log(url);

        FB.ui({
            method: 'send',
            link: url,
            redirect_uri: window.location.href,
            
        },
        (response) => { console.log(response); }
        );

    }

    render () {

        return (

            <React.Fragment>
                <Navbar userImg={ this.state.user_data ? this.state.user_data.img : null} signedIn={this.props.sessionStatus} linkPath={this.props.location.pathname} />
                <Particles className={`particles ${Object.keys(this.state).length ? 'fade-in-fast' : 'be-out'}`} params={ particleConfig2 } />
                <div className="container-fluid">
                    <div className="row"> 
                        { !Object.keys(this.state).length ? <div className="spinner-container fade-in-fast"><span className="spinner-border spinner-fade-getting-gifs text-light" role="status" aria-hidden="true"></span></div> : <DashContainer delete={this.performDelete}shouldRedirect={this.state.shouldRedirect ? true : false} regainData={this.performDataFetch} sendDialog={this.sendDialog} masterState={this.state}/> } 
                    </div>
                </div>
            </React.Fragment>

        );
        
    }
    
}

export default Dashboard;


