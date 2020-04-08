import React, { Component } from 'react'
import RefChildComponent from './RefChildComponent'

class RefParentComponent extends Component {
    constructor(props) {
        super(props)
        this.parentRef = React.createRef()

        this.state = {

        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.parentRef.current.focus()
        /* this.parentRef.current.siddhuInput.focus()
        this.parentRef.current.siddhuLabel.color = 'green' */
    }

    render() {
        return (
            <div>
                <RefChildComponent ref={this.parentRef} />
                <button onClick={this.clickHandler}>Click button</button>
            </div>
        )
    }
}

export default RefParentComponent
