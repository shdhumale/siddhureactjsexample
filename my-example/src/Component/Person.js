import React from 'react'

function Person(props) {
    return (
        <div>
            <h1>I am person with id as {props.innerelement.id} and my name as {props.innerelement.name}</h1>
        </div>
    )
}

export default Person
