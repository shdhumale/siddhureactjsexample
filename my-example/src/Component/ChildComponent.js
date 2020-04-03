import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.callParentMethod}>Child Button</button> */}
            <button onClick={() => props.callParentMethod("using argument from child")}>Child Button</button>
        </div>
    )
}

export default ChildComponent
