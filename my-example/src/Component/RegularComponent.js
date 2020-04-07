import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log('this is Regularclass')
        return (
            <div>
                this is RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
