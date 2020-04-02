import React from 'react'

class SiddhuClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="MainComponent">
                <h1>this is Class  component {this.props.myPropName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default SiddhuClassComponent