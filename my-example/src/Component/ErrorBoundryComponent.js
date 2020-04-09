import React, { Component } from 'react'

export class ErrorBoundryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {

        if (this.state.hasError) {
            return <h1>Error occur and please check the logs</h1>

        }
        else {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default ErrorBoundryComponent
