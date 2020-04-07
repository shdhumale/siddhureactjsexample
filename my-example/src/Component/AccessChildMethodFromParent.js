import React, { Component } from 'react'
import ChileRefClass from './ChileRefClass'

//ways to access method 
//1- Access parent method from child --> use props [c->p use prop]
//2- Access child method from parent -->always use refs as shown below [p->c use ref]
class AccessChildMethodFromParent extends Component {
    constructor(props) {
        super(props)
        this.myParentRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.myParentRef.current.focusInputComponent();
    }

    render() {
        return (
            <div>
                <ChileRefClass ref={this.myParentRef} />
                <button onClick={this.clickHandler}>Click to focus on child component input text</button>
            </div>
        )
    }
}

export default AccessChildMethodFromParent
