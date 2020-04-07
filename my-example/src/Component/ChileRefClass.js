import React, { Component } from 'react'

class ChileRefClass extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {

        }
    }

    focusInputComponent() {
        this.myRef.current.focus()
        //alert('here reached')
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
            </div>
        )
    }
}

export default ChileRefClass
