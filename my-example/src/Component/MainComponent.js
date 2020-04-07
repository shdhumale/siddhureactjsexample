import React from 'react';
import SiddhuFirstFunctionComponent from './SiddhuFirstFunctionComponent';
import JSXComponent from './JSXComponent'
import SiddhuClassComponent from './SiddhuClassComponent'
import SiddhuStateButton from './SiddhuStateButton'
import EventBinding from './EventBinding'
import ParentComponent from './ParentComponent'
import ListArrayExample from './ListArrayExample'
import CSSComponent from './CSSComponent'
import InlineStyle from './InlineStyle'
import '../siddhu.css'
import styles from '../siddhu.module.css'
import BasicForm from './BasicForm'
import LifeCycleA from './LifeCycleA'
import Table from './Table'
import ParentComponentRegPure from './ParentComponentRegPure'
import RefClass from './RefClass'
import AccessChildMethodFromParent from './AccessChildMethodFromParent'

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="MainComponent">
                {/* <h1 className='primary'>this is main component with simple CSS</h1>
                <h1 className={styles.primary}>this is main component with module css</h1> */}
                {/* <SiddhuFirstFunctionComponent name="siddhuprop" /> 
                <JSXComponent name="siddhu">
                    <p>this is my paragraph</p>
                    <button>my button</button>
                </JSXComponent> */}
                {/*  <SiddhuClassComponent myPropName="siddhu class prop">
                    <p>this is class component paragraph</p>
                    <button>my class component button</button>
                </SiddhuClassComponent> */}
                {/* <SiddhuStateButton myValue="1" /> */}
                {/*  <EventBinding /> */}
                {/* <ParentComponent /> */}
                {/* <ListArrayExample /> */}
                {/* <CSSComponent /> */}
                {/* <InlineStyle /> */}
                {/* <BasicForm /> */}
                {/* <LifeCycleA /> */}
                {/* <Table /> */}
                {/* <ParentComponentRegPure /> */}
                {/* <RefClass /> */}
                <AccessChildMethodFromParent />
            </div>
        )
    }

}

export default MainComponent;