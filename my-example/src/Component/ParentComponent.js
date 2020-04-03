import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    parentMethod(argument) {
        alert("hello" + argument);
    }

    render() {
        return (
            <div>
                <ChildComponent callParentMethod={this.parentMethod} />
            </div>
        )
    }
}

export default ParentComponent
