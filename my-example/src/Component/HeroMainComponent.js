import React, { Component } from 'react'
import HeroValidationComponent from './HeroValidationComponent'
import ErrorBoundryComponent from './ErrorBoundryComponent'

export class HeroMainComponent extends Component {
    render() {
        return (
            <div>
                <ErrorBoundryComponent>
                    <HeroValidationComponent heroName="Siddhu" />
                </ErrorBoundryComponent>
                <ErrorBoundryComponent>
                    <HeroValidationComponent heroName="Dhumale" />
                </ErrorBoundryComponent>
                <ErrorBoundryComponent>
                    <HeroValidationComponent heroName="Jocker" />
                </ErrorBoundryComponent>

            </div>
        )
    }
}

export default HeroMainComponent
