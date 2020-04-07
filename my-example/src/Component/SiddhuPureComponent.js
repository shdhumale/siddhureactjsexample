import React, { Component, PureComponent } from 'react'

class SiddhuPureComponent extends PureComponent {
    render() {
        console.log('this is pure class')
        return (
            <div>
                this is PureComponent {this.props.name}
            </div>
        )
    }
}

export default SiddhuPureComponent
