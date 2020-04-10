import React, { Component } from 'react'

export class ClickRenderPropComponent extends Component {

    /* constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {

        this.setState({ count: this.state.count + 1 })
    } */

    render() {
        let { count, clickHandler } = this.props
        return (
            <div>
                {/*  <button onClick={this.clickHandler}>Click {this.state.count} Button</button> */}
                {/* <button onClick={this.prop.clickHandler}>Click {this.prop.count} Button</button> */}
                <button onClick={clickHandler}>Click {count} Button</button>
            </div>
        )
    }
}

export default ClickRenderPropComponent
