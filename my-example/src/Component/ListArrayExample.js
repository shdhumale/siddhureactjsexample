import React from 'react'
import Person from './Person'

function ListArrayExample() {
    const persons = [{
        id: 1,
        name: 'one'
    },
    {
        id: 2,
        name: 'two'
    }
    ]

    //map has two parameter (function name => function body)
    const newPerson = persons.map(innerelement => <Person key={innerelement.id} innerelement={innerelement}></Person>)

    return (
        <div>
            {newPerson}
        </div>
    )
}

export default ListArrayExample
