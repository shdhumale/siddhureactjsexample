import React from 'react'

function HeroValidationComponent(props) {
    if (props.heroName == "Jocker") {
        throw Error ("He is not an Hero")
    }
    else {
        return (
            <div>
                {props.heroName}
            </div>
        )

    }

}

export default HeroValidationComponent
