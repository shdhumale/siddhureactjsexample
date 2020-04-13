import React, { Component } from 'react'
import axios from 'axios'

export class AxiosGetRequest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response)
                this.setState({ data: response.data })
            }).catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error occur' })
            })
    }

    render() {
        let { data, errorMsg } = this.state

        return (

            < div >
                List of posts {

                    data.length ?
                        data.map((data) => <div key={data.id}>{data.title}</div>) :
                        null

                }
                {
                    errorMsg ? <div >{errorMsg}</div> : null
                }
            </div >
        )
    }
}

export default AxiosGetRequest
