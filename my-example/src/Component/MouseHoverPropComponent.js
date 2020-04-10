import React, { Component } from 'react'

export class MouseHoverPropComponent extends Component {

    /*  constructor(props) {
         super(props)
 
         this.state = {
             count: 0
         }
     }
 
     clickHandler = () => {
         this.setState({ count: this.state.count + 1 })
     }
  */
    render() {
        let { count, clickHandler } = this.props
        return (
            <div>
                {/* <h1 onMouseOver={this.clickHandler}>Number of time mouse is hover on this {this.state.count} </h1> */}
                {/* <h1 onMouseOver={this.prop.clickHandler}>Number of time mouse is hover on this {this.prop.count} </h1> */}
                <h1 onMouseOver={clickHandler}>Number of time mouse is hover on this {count} </h1>
            </div>
        )
    }
}

export default MouseHoverPropComponent
