import React, { Component } from 'react'

class ChildClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.callParentMethodinClass('passing arguments')}>Class Button</button>
            </div>
        )
    }
}

export default ChildClassComponent
