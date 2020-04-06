import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'siddhu'
        }
        console.log(' LifeCycleA constructor')
    }

    static getDerivedStateFromProps(state, props) {

        console.log(' LifeCycleA getDerivedStateFromProps')
        return null;
    }

    render() {
        console.log(' LifeCycleA render')
        return (
            <div>
                This is parent Component
                <div>
                    <LifeCycleB />
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(' LifeCycleA componentDidMount')
    }
}

export default LifeCycleA
