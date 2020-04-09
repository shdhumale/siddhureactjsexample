import React, { Component } from 'react'
//import MyHigherOrderComponent from './MyHigherOrderComponent'
import MyIncrementHOC from './MyIncrementHOC'

export class ClickIncrementComponent extends Component {
    /*  constructor(props) {
         super(props)
 
         this.state = {
             count: 0
         }
         this.clickHandler = this.clickHandler.bind(this)
     }
 
     clickHandler() {
         this.setState({
             count: this.state.count + 1
         })
     }
  */
    render() {
        return (
            <div>
                <h1>{/* {this.state.count} */} {this.props.count}</h1>
                <button onClick={this.props.clickHandler}>Click {/* {this.props.name} */} {/* {this.state.count} */}  {this.props.count} button</button>
            </div>
        )
    }
}

//export default MyHigherOrderComponent(ClickIncrementComponent)
export default MyIncrementHOC(ClickIncrementComponent)
