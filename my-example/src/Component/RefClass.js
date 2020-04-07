import React, { Component } from 'react'

//three step to create ref 1- create ref element, 2-assigned it to perticualr componenet 3- use it with inbuild function
export class RefClass extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.cbRef = null
        this.setCBRef = (element) => {
            this.cbRef = element
        }

        this.state = {

        }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        /*  this.myRef.current.focus()
         console.log(`------==========--------  ${this.myRef}`) */
    }

    clickhandler = (event) => {
        alert(this.myRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <input type="text" ref={this.setCBRef} />
                <button onclick={this.clickHandler}>My button</button>
            </div>
        )
    }
}

export default RefClass
