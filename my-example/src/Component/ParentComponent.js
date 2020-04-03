import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import ChildClassComponent from './ChildClassComponent'


class ParentComponent extends Component {

    parentMethod(argument) {
        alert("hello" + argument);
    }

    render() {
        return (
            <div>
                <ChildComponent callParentMethod={this.parentMethod} />
                <ChildClassComponent callParentMethodinClass={this.parentMethod} />
            </div>
        )
    }
}

export default ParentComponent
