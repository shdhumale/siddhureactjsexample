import React from 'react'

function MyIncrementHOC(OriginalComponent, IncrementValue) {

    class MyNewComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0,
                color: 'green'
            }
            this.clickHandler = this.clickHandler.bind(this)
        }

        clickHandler() {
            console.log({ ...this.props })
            this.setState({
                //below line code will work only for ClickIncrementComponent as from that only we are sending incrementValue as prop ano
                //not from MouseHoverIncrement
                // count: this.state.count + Number(this.props.incrementValue),
                count: this.state.count + IncrementValue,
                color: 'Orange'
            })
        }

        render() {
            return (
                <OriginalComponent count={this.state.count} color={this.state.color} clickHandler={this.clickHandler} {...this.props} />
            )
        }
    }

    return (
        MyNewComponent
    )
}

export default MyIncrementHOC
