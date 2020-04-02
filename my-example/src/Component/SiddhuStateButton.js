import React from 'react'

class SiddhuStateButton extends React.Component {


    constructor(props) {
        super(props);
        this.state =
        {
            message: 'This is my message'
        }
        this.changeMessage = this.changeMessage.bind(this);
    }

    //note as the blow is not a function we cannot convert it into ==> function
    changeMessage() {
        this.setState(
            {
                message: 'Message is changed on button click'
            }
        )
    }

    render() {
        return (
            <div>
                {/* <h1>This is my message</h1> */}
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Change Message</button>
            </div>


        )
    }
}


export default SiddhuStateButton