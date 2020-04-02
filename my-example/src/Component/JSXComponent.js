import React from 'react'


let JSXComponent = () => {
    /* return (
        <div>
            <h1> this is JSX files</h1>
        </div>
    ) */

    return React.createElement('div', { id: 'test', className: 'siddhuClass' }, React.createElement('h1', null, 'this is non JSX'));

}


export default JSXComponent