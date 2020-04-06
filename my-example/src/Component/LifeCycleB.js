import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'siddhu'
        }
        console.log(' LifeCycleB constructor')
    }

    static getDerivedStateFromProps(state, props) {

        console.log(' LifeCycleB getDerivedStateFromProps')
        return null;
    }

    render() {
        console.log(' LifeCycleB render')
        return (
            <div>
                This is Child Component
            </div>
        )
    }

    componentDidMount() {
        console.log(' LifeCycleB componentDidMount')
    }
}

export default LifeCycleB
