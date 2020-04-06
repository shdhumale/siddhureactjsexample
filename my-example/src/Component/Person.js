import React from 'react'

function Person(props) {
    return (
        <div>
            <h1 color='green'>I am person with id as {props.innerelement.id} and my name as {props.innerelement.name}</h1>
        </div>
    )
}

export default Person
