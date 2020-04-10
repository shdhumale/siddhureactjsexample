import React, { Component } from 'react'
import BComponent from './BComponent'

class AComponent extends Component {
    render() {
        return (
            <div>
                <BComponent />
            </div>
        )
    }
}

export default AComponent
