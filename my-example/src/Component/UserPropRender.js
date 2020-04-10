import React, { Component } from 'react'

export class UserPropRender extends Component {
    render() {
        return (
            <div>
                {/* <h1>Siddhu</h1> */}
                {/* <h1>{this.props.name}</h1> */}
                <h1>{this.props.name(false)}</h1>
            </div>
        )
    }
}

export default UserPropRender
