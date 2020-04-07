import React, { Component } from 'react'
import SiddhuPureComponent from './SiddhuPureComponent'
import RegularComponent from './RegularComponent'
import ReactMemoFunction from './ReactMemoFunction'

class ParentComponentRegPure extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'siddhu'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'siddhu' })
        }, 2000);
    }
    render() {
        console.log('===========================parent class ==========================')
        return (
            <div>
                this is ParentComponentRegPure
                {/* <RegularComponent name={this.state.name} />
                <SiddhuPureComponent name={this.state.name} /> */}
                <ReactMemoFunction name={this.state.name} />
            </div>

        )
    }
}

export default ParentComponentRegPure
