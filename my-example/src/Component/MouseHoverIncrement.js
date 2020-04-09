import React, { Component } from 'react'
//import MyHigherOrderComponent from './MyHigherOrderComponent'
import MyIncrementHOC from './MyIncrementHOC'

export class MouseHoverIncrement extends Component {
    /*   constructor(props) {
          super(props)
  
          this.state = {
              count: 0,
              color: 'green'
          }
          this.mouseHoverListener = this.mouseHoverListener.bind(this)
      }
  
      clickHandler() {
          this.setState(
              {
                  count: this.state.count + 1,
                  color: 'orange'
              }
          )
      }
   */
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.clickHandler} color={this.props.color}>Number of {/* {this.props.name} */} time mouse hover action is done {/* {this.state.count} */} {this.props.count}</h1>
            </div>
        )
    }
}

//export default MyHigherOrderComponent(MouseHoverIncrement)
export default MyIncrementHOC(MouseHoverIncrement, 5)
