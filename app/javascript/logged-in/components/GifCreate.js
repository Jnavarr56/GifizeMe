import React from 'react'
import gifshot from 'gifshot'
import DurationSelect from './DurationSelect'
import axios from 'axios'

class GifCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedEmojiID: null,
            selectedEmoji: null,
            videoStarted: false,
            videoDuration: 100
        }
        this.selectEmoji = this.selectEmoji.bind(this);
        this.testCapture = this.testCapture.bind(this);
        this.dataURItoBlob = this.dataURItoBlob.bind(this);
        this.handleStartRecord = this.handleStartRecord.bind(this);
        this.handleServerTest = this.handleServerTest.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
    }

    dataURItoBlob(dataURI) {
        // convert base64 to raw binary data held in a string
        let byteString = atob(dataURI.split(',')[1]);
    
        // separate out the mime component
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
        // write the bytes of the string to an ArrayBuffer
        let arrayBuffer = new ArrayBuffer(byteString.length);
        let _ia = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            _ia[i] = byteString.charCodeAt(i);
        }
    
        let dataView = new DataView(arrayBuffer);
        let blob = new Blob([dataView], { type: mimeString });
        return blob;
    };


    componentDidMount() {

 
    }

    componentDidUpdate() {

        if (this.videoRolling) {

            this.videoRolling = false;

            this.testCapture();
        }

        if (this.state.imgCap) {
            

        }
 
    }

    testCapture() {

        const me = this;

        console.log(this.state.videoDuration * 10);

        gifshot.createGIF(
            {
                webcamVideoElement: document.getElementById('thing'),
                'numFrames': this.state.videoDuration * 10,
                'interval': .05

            },
            function(obj) {

                console.log(obj);

                if(!obj.error) {   

                    const stateCopy = {...me.state};
                    stateCopy.imgCap = {...obj}
                    me.setState(stateCopy)
                    
                }

            }
        );

    }

    selectEmoji(i) {

        const stateCopy = {...this.state};

        stateCopy.selectedEmojiID = i;
        
        for (let x = 0; x < this.props.masterState.user_gifs.available_emojis.length; x++) {

            if (this.props.masterState.user_gifs.available_emojis[x].id === i) {

                stateCopy.selectedEmoji = this.props.masterState.user_gifs.available_emojis[x].code;

                stateCopy.selectedEmojiName = this.props.masterState.user_gifs.available_emojis[x].name;

                this.setState(stateCopy);
            }

        }
        
    }

    handleStartRecord() {

        const stateCopy = {...this.state};

        stateCopy.videoStarted = true
        this.videoRolling = true;
    
        this.setState(stateCopy);

    }


    handleServerTest() {

        let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
        axios.defaults.headers.common['X-CSRF-Token'] = token
        axios.defaults.headers.common['Accept'] = 'application/json'

        let obj = this;

        const data = new FormData();

        data.append(`${this.state.selectedEmojiID}`, this.dataURItoBlob(this.state.imgCap.image));

        axios.post('/upload', 

           data

        ,
        { headers: { 'Content-Type' : 'multipart/form-data;'} }
        ).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    handleDurationChange(e) {

        
        const stateCopy = {...this.state};
        stateCopy.videoDuration = parseInt(e.currentTarget.value);

        this.setState(stateCopy);
        

    }




    render () {

        console.log("GO");

        return (

            <React.Fragment>
                <div className="fade-in capture-group">
                    <div className="video">
                        {this.state.videoStarted ? (this.state.imgCap ? <img src={this.state.imgCap.image} /> : <video id="thing"></video>) : <i className="fas fa-video"></i> }
                    </div>
                    <div className="emojiSelectWindow">
                        <p className="text-center">{this.state.selectedEmoji ? `${this.state.selectedEmoji} ${this.state.selectedEmojiName}`  :'First, select an emoji below!'}</p>
                        {!this.state.selectedEmoji  ?  ''  : ( !this.state.imgCap ? <button className="btn btn-info" onClick={this.handleStartRecord}>Click to Start Recording</button> : <button className="btn btn-warning" onClick={this.handleServerTest}>Save</button>)}
                        {!this.state.selectedEmoji  ?  ''  : ( !this.state.imgCap ? <DurationSelect changingVideoDuration={this.handleDurationChange} /> : '' )}
                    </div>
                </div>
                <div className="fade-in card-group available-emojis">
                    {this.props.masterState.user_gifs.available_emojis.map(x => <div onClick={() => this.selectEmoji(x.id)} className={x.id === this.state.selectedEmojiID ? 'selected-emoji-table' : '' } key={`${x.id}`}><h5 className="">{x.code}</h5></div>)}
                </div>
            </React.Fragment>
        );



    }
    
}

export default GifCreate;


