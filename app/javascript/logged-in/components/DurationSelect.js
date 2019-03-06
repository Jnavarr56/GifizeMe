import React from 'react'

class DurationSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const arrSecs = [];
        let i = 1;

        while (arrSecs.length < 15) { arrSecs.push(i); i++; }

        return (

            <select onChange={this.props.changingVideoDuration}>
                {arrSecs.map(x => <option key={`GFS${x}`} value={x}>{`${x} Second${i > 1 ? 's' : ''}`}</option>)}
            </select>

        );
    }

}

export default DurationSelect;