import React from 'react'


let JSXComponent = (props) => {
    console.log(props.children);
    return (
        <div>
            <h1> this is JSX files {props.name}</h1>
            {props.children}
        </div>
    )

    // return React.createElement('div', { id: 'test', className: 'siddhuClass' }, React.createElement('h1', null, 'this is non JSX'));

}

/* function JSXComponent(props) {
    console.log(props.children);
    return (
        <div>
            <h1> this is JSX files {props.name}</h1>
            {props.children}
        </div>
    )
} */


export default JSXComponent