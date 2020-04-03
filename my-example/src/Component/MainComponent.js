import React from 'react';
import SiddhuFirstFunctionComponent from './SiddhuFirstFunctionComponent';
import JSXComponent from './JSXComponent'
import SiddhuClassComponent from './SiddhuClassComponent'
import SiddhuStateButton from './SiddhuStateButton'

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="MainComponent">
                {/* <h1>this is main component</h1>
                <SiddhuFirstFunctionComponent name="siddhuprop" />
                <JSXComponent name="siddhu">
                    <p>this is my paragraph</p>
                    <button>my button</button>
                </JSXComponent>
                <SiddhuClassComponent myPropName="siddhu class prop">
                    <p>this is class component paragraph</p>
                    <button>my class component button</button>
                </SiddhuClassComponent> */}
                <SiddhuStateButton myValue="1" />
            </div>
        )
    }

}

export default MainComponent;