import React, { Component } from 'react'

class BasicForm extends Component {

    //form element should always have two things 
    //1- Value that need to be taken from state
    //2- handle onChange event and update the value in state using setState

    constructor(props) {
        super(props)

        this.state = {
            textValue: '',
            textAreaValue: '',
            selectValue: 'value1'

        }
        this.textValueChange = this.textValueChange.bind(this)
        this.textAreaValueChange = this.textAreaValueChange.bind(this)
        this.selectValueChange = this.selectValueChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    textValueChange(event) {
        this.setState(
            {
                textValue: event.target.value
            }
        )
    }

    textAreaValueChange(event) {
        this.setState(
            {
                textAreaValue: event.target.value
            }
        )

    }

    selectValueChange(event) {
        this.setState(
            {
                selectValue: event.target.value
            }
        )
    }

    submitForm(event) {
        alert(this.state.textValue + this.state.textAreaValue + this.state.selectValue)
        event.preventDefault()
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <label>Text value:</label>
                        <input type="text" value={this.state.textValue} onChange={this.textValueChange}>

                        </input>
                    </div>
                    <div>
                        <label>Text Area:</label>
                        <textarea value={this.state.textAreaValue} onChange={this.textAreaValueChange} />
                    </div>
                    <div>
                        <label>Select Values:</label>
                        <select onChange={this.selectValueChange}>
                            <option value='value1'> VALUE1</option>
                            <option value='value2'> VALUE2</option>
                            <option value='value3'> VALUE3</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit button</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BasicForm
