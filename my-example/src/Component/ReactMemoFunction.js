import React from 'react'

function ReactMemoFunction(props) {
    console.log('this is ReactMemoFunction')
    return (
        <div>
            this is react memo function {props.name}
        </div>
    )
}

export default React.memo(ReactMemoFunction)
