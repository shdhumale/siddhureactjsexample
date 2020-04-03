import React from 'react'

class SiddhuClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //using destructuring
        const { myPropName } = this.props
        return (
            <div className="MainComponent">
                <h1>this is Class  component {myPropName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default SiddhuClassComponent