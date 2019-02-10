import React from 'react'
import Emojis from 'extra-data/Emojis'

class JumbotronHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emojis: Emojis(),
            index: 0,
            charIndex: 0,
            wordWriting: '',
            fadeIn: false,
            fadeOut: false
        }
    }

    componentDidUpdate() {

        const stateCopy = {...this.state};

        if (this.state.emojis[this.state.index].type === 'text' && (this.state.wordWriting.length !== this.state.emojis[this.state.index].item.length)) {

            const stateCopy = {...this.state};
            
            stateCopy.wordWriting += stateCopy.emojis[stateCopy.index].item[stateCopy.charIndex];
            stateCopy.charIndex++;

            console.log(stateCopy);
            setTimeout(() => {

                this.setState(stateCopy);

            },  75);

        }

        else {

            /*

            stateCopy.index = stateCopy.index === stateCopy.emojis.length - 1 ? 0 : stateCopy.index + 1;
            stateCopy.charIndex = 0;

            setTimeout(() => {

                this.setState(stateCopy);

            }, 2000);

            */

        }



    }

    componentDidMount() {

        setTimeout(() => {

            if (this.state.wordWriting.length !== this.state.emojis[this.state.index].item.length) {

                const stateCopy = {...this.state};
                
                stateCopy.wordWriting += stateCopy.emojis[stateCopy.index].item[stateCopy.charIndex];
                stateCopy.charIndex ++;

                console.log(stateCopy);
                setTimeout(() => {
    
                    this.setState(stateCopy);
    
                },  75);

            }

        }, 1000);
 
    }

    render () {



            return (

                <div className="jumbotron-header-wrapper">    
                    <h1>{this.state.wordWriting}</h1>
                </div>
                
            );
    


    }

}

export default JumbotronHeader;


