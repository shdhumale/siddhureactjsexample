import React from 'react'

function MyHigherOrderComponent(OriginalComponent) {
    class NewComponent extends React.Component {
        render() {
            return (
                <OriginalComponent name='siddhu' />
            )
        }
    }
    return NewComponent
}

export default MyHigherOrderComponent
