import React from 'react'

function MyIncrementHOC(OriginalComponent) {

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
            this.setState({
                count: this.state.count + 1,
                color: 'Orange'
            })
        }

        render() {
            return (
                <OriginalComponent count={this.state.count} color={this.state.color} clickHandler={this.clickHandler} />
            )
        }
    }

    return (
        MyNewComponent
    )
}

export default MyIncrementHOC
