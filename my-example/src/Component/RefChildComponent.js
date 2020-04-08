import React from 'react'

/* function RefChildComponent() {
    return (
        <div>
            <input type="text" />
        </div>
    )
} */


let RefChildComponent = React.forwardRef((props, ref) => {

    return (
        <div>

            {/* <label name='siddhuLabel' ref={ref} >this is new lable</label> */}
            <input type="text" name='siddhuInput' ref={ref} />
        </div>
    )
})

export default RefChildComponent
