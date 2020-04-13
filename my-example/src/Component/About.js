import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        console.log(this.props.location.search)
        return (
            <div>
                This is About Page
            </div>
        )
    }
}

export default About
