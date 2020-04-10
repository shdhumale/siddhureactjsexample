import React, { Component } from 'react'
import CComponent from './CComponent'
import UserContext from './ContextComponent'

class BComponent extends Component {
    //Draw back with below option 1- It works only with class component 2- We can subscribe to single context using context type.
    static contextType = UserContext
    render() {
        return (
            <div>
                <h1>this is user context from contextType {this.context}</h1>
                <CComponent />
            </div>
        )
    }
}


/* BComponent.contextType = UserContext */
export default BComponent
