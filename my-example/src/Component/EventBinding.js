import React, { Component } from 'react'

export class EventBinding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Construtor message"
        }
        //binding in constructor
        //this.myButtonClick = this.myButtonClick.bind(this)
    }


    /*  myButtonClick() {
         this.setState(
             {
                 message: "change from setState method"
             }
         )
 
     } */

    myButtonClick = () => {
        this.setState(
            {
                message: "change from setState method"
            }
        )
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={this.myButtonClick}>My Click Button</button>
                {/* <button onClick={() => this.myButtonClick()}>My Click Button</button> */}
                {/* <button onClick={this.myButtonClick.bind(this)}>My Click Button</button> */}
            </div>
        )
    }
}

export default EventBinding
