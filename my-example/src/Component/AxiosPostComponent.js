import React, { Component } from 'react'
import axios from 'axios'

export class AxiosPostComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',
            errorMsg: ''

        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormHandle = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then((response) => { console.log(response) }).catch((errorMsg) => { console.log(errorMsg) })
    }

    render() {
        const { userId, title, body, errorMsg } = this.state
        return (
            <div>
                <form onSubmit={this.submitFormHandle}>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    <button onSubmit='submit'>Submit </button>
                </form>
            </div >
        )
    }
}

export default AxiosPostComponent
