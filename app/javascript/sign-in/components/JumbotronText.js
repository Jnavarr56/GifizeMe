import React from 'react'

class JumbotronText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 0,
            text: {
                0: 'Record yourself to make gifs.',
                1: 'Map them to emoijis.',
                2: 'Send to friends via FB messenger.'
            },
            triggeredNext: false,
            canRest: false
        };
    }

    componentDidUpdate() {

        const stateCopy =  {...this.state};

        if (!this.state.triggeredNext) {

            stateCopy.limit++;
            stateCopy.triggeredNext = stateCopy.limit === Object.keys(this.state.text).length ? true : false;

            setTimeout(() => this.setState(stateCopy), 750);

        }

        else if (this.state.triggeredNext && !this.state.canRest) {

            this.props.triggerNextRender();

            stateCopy.triggeredNext = true;
            stateCopy.canRest = true;

            this.setState(stateCopy);
            
        }

    }

    componentDidMount() {

        const stateCopy =  {...this.state};
        stateCopy.limit++;

        setTimeout(() => this.setState(stateCopy), 750);

    }

    render() {
        
        console.log("JUMBOTRONTEXT")

        return (

            <ul className="sign-in-jumbotron-list">

                {Object.keys(this.state.text).map((x, i) => {

                    return i <= this.state.limit ? <li className="fade-in" key={`L${i}`}>{this.state.text[x]}</li> : '';

                })}

            </ul>

        );

    }

}

export default JumbotronText;