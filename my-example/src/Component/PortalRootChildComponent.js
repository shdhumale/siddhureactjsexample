import React from 'react'
import ReactDOM from 'react-dom'

function PortalRootChildComponent() {
    return ReactDOM.createPortal(
        <div>
            <h1>This is Portal component</h1>
        </div>, document.getElementById('portal-root')
    )
}

export default PortalRootChildComponent
