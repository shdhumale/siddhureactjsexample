import React from 'react';
import SiddhuFirstFunctionComponent from './SiddhuFirstFunctionComponent';
import JSXComponent from './JSXComponent'

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="MainComponent">
                <h1>this is main component</h1>
                <SiddhuFirstFunctionComponent name="siddhuprop" />
                <JSXComponent />            </div>
        )
    }

}

export default MainComponent;