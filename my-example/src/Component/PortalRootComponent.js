import React, { Component } from 'react'
import PortalRootChildComponent from './PortalRootChildComponent'

class PortalRootComponent extends Component {
    render() {
        return (
            <div>
                This is Portal parent component
                <PortalRootChildComponent />
            </div>
        )
    }
}

export default PortalRootComponent
