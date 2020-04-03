import React from 'react'

class SiddhuStateButton extends React.Component {


    constructor(props) {
        super(props);
        this.state =
        {
            message: 'This is my message',
            count: 0

        }
        this.changeMessage = this.changeMessage.bind(this);
        this.increment = this.increment.bind(this);
    }


    //note as the blow is not a function we cannot convert it into ==> function
    changeMessage() {

        /* this.setState(
            {
                message: 'Message is changed on button click',
                count: this.state.count + 1
            }, () => console.log('--------inside call back-------' + this.state.count)
        ) */

        this.setState((prevState, props) => (
            {
                message: 'Message is changed on button click',
                count: prevState.count + Number(this.props.myValue)
            }//, () => console.log('--------inside call back-------' + this.state.count)
        ))
        console.log('-----outside call back----------' + this.state.count);
    }

    increment() {
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();

    }
    render() {
        return (
            <div>
                {/* <h1>This is my message</h1> */}
                <h1>{this.state.message}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Change Message</button>
            </div>


        )
    }
}


export default SiddhuStateButton