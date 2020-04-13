import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Shop from './Shop'

export class MyRouterComponent extends Component {
    render() {
        return (
            <Router>
                <div >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about?ids=1234">About Us</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop Us</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route exact path='/shop' component={Shop}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default MyRouterComponent
