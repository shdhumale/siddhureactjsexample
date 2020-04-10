import React, { Component } from 'react'
import { UserConsumer } from './ContextComponent'

class CComponent extends Component {
    render() {
        return (
            /*  <div>
                 <h1>this is c components</h1>
             </div> */
            <UserConsumer>
                {
                    (userName) => {
                        return <h1>this is c components with value {userName}</h1>

                    }
                }
            </UserConsumer>
        )
    }
}

export default CComponent
