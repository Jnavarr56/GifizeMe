import React from 'react'
import Emojis from 'extra-data/Emojis'
import SignInButton from 'shared-components/session-buttons/SignInButton'
import JumbotronText from './JumbotronText'

class JumbotronContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emojis: Emojis(),
            index: 0,
            charIndex: 0,
            wordWriting: '',
            canRenderText: false,
            doNotRenderButton: true
        }
        this.handleFinishTextRender = this.handleFinishTextRender.bind(this);
    }

    componentDidUpdate() {

        const stateCopy = {...this.state};
        
        if (this.state.doNotRenderButton) {

            if ((this.state.emojis[this.state.index].type === 'text') && (this.state.wordWriting.length !== this.state.emojis[this.state.index].item.length)) {
                
                stateCopy.wordWriting += stateCopy.emojis[stateCopy.index].item[stateCopy.charIndex];
                stateCopy.charIndex++;

                setTimeout(() => {

                    this.setState(stateCopy);

                },  100);

            }

            else {

                if (!this.state.canRenderText) {

                    stateCopy.canRenderText = true;
        
                    setTimeout(() => {
        
                        this.setState(stateCopy);
        
                    },  750);

                }

            }

        }

    }

    componentDidMount() {

        setTimeout(() => {

            if (this.state.wordWriting.length !== this.state.emojis[this.state.index].item.length) {

                const stateCopy = {...this.state};
                
                stateCopy.wordWriting += stateCopy.emojis[stateCopy.index].item[stateCopy.charIndex];
                stateCopy.charIndex ++;

                setTimeout(() => {
    
                    this.setState(stateCopy);
    
                },  100);

            }

        }, 0);
 
    }

    handleFinishTextRender() {

        const stateCopy = {...this.state};

        stateCopy.doNotRenderButton = false;
        this.setState(stateCopy);

    }

    render () {
        
        console.log('JUMBOTRONCONTENT');


        return (

            <div className="jumbotron-header-wrapper">    
                <h1>{ this.state.wordWriting }</h1>
                { this.state.canRenderText ? <JumbotronText  triggerNextRender={this.handleFinishTextRender} />  : '' }
                { !this.state.doNotRenderButton ? <SignInButton redirectMethod={this.props.redirectMethod}  classList={'btn sign-in-btn-landing size-fade-in'} /> : '' }
            </div>


            
        );
    


    }

}

export default JumbotronContent;


