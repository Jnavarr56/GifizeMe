import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {

        if (this.state.second) {

            setTimeout(() => {

                this.setState({
                    second: this.state.second - 1
                }); 

            }, 1000);

        }
        
    }

    componentDidMount() {

        console.log('mounted');

        this.setState({
            second: this.props.gifDuration
        });
        
    }

    render() {

       return  <p>{this.state.second ? this.state.second : ''}</p>;

    }
}

export default Timer;