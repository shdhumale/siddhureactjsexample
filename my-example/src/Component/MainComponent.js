import React from 'react';
import SiddhuFirstFunctionComponent from './SiddhuFirstFunctionComponent';

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="MainComponent">
                <h1>this is main component</h1>
                <SiddhuFirstFunctionComponent name="siddhuprop" />
            </div>
        )
    }

}

export default MainComponent;