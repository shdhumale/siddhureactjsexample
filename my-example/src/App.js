import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = { firstvalue: 0, secondvalue: 0, ansvalue: 0, contacts: [] };

    this.handleFirstNumberChange = this.handleFirstNumberChange.bind(this);
    this.handleSecondNumberChange = this.handleSecondNumberChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleSubSubmit = this.handleSubSubmit.bind(this);
    this.handleDivSubmit = this.handleDivSubmit.bind(this);
    this.handleMulSubmit = this.handleMulSubmit.bind(this);
    this.handleWSSubmit = this.handleWSSubmit.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }

  handleFirstNumberChange(event) {
    console.log(event.target.value);
    this.setState({ firstvalue: Number(event.target.value) });

  }

  handleSecondNumberChange(event) {
    console.log(event.target.value);
    this.setState({ secondvalue: Number(event.target.value) });

  }

  handleAddSubmit(event) {
    console.log(this.state.firstvalue);
    console.log(this.state.secondvalue);
    let x = this.state.firstvalue + this.state.secondvalue;
    this.setState({ ansvalue: x })
  }
  setDefault(event) {
    this.setState({ ansvalue: 0 })
  }


  handleSubSubmit(event) {
    console.log(this.state.firstvalue);
    console.log(this.state.secondvalue);
    let x = this.state.firstvalue - this.state.secondvalue;
    this.setState({ ansvalue: x })
  }

  handleDivSubmit(event) {
    console.log(this.state.firstvalue);
    console.log(this.state.secondvalue);
    let x = this.state.firstvalue / this.state.secondvalue;
    this.setState({ ansvalue: x })
  }


  handleMulSubmit(event) {
    console.log(this.state.firstvalue);
    console.log(this.state.secondvalue);
    let x = this.state.firstvalue * this.state.secondvalue;
    this.setState({ ansvalue: x })
    const total = [0, 1, 2, 3];
    total.reduce((sum, value) => sum + value, 1);
  }

  handleWSSubmit(event) {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)

  }



  /* updateState() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  } */

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab onClick={this.setDefault}>Addition</Tab>
            <Tab onClick={this.setDefault}>Substraction</Tab>
            <Tab onClick={this.setDefault}>Division</Tab>
            <Tab onClick={this.setDefault}>Multiplication</Tab>
            <Tab >Web Service Call</Tab>
            <Tab>Link Example</Tab>
            <Tab>Audio - Video Files</Tab>
          </TabList>

          <TabPanel >
            <h2>Addition Example</h2>

            <label>
              First Value:
                <input type="number" onChange={this.handleFirstNumberChange} />
            </label>
            <label>
              Second Value:
                <input type="number" onChange={this.handleSecondNumberChange} />
            </label>
            <input type="button" onClick={this.handleAddSubmit} value="Add" />
            <label>
              Answer:{this.state.ansvalue}
            </label>

          </TabPanel>
          <TabPanel>
            <h2>Substraction Example</h2>
            <label>
              First Value:
                <input type="number" onChange={this.handleFirstNumberChange} />
            </label>
            <label>
              Second Value:
                <input type="number" onChange={this.handleSecondNumberChange} />
            </label>
            <input type="button" onClick={this.handleSubSubmit} value="Subtraction" />
            <label>
              Answer:{this.state.ansvalue}
            </label>
          </TabPanel>
          <TabPanel>
            <h2>Division Example</h2>
            <label>
              First Value:
                <input type="number" onChange={this.handleFirstNumberChange} />
            </label>
            <label>
              Second Value:
                <input type="number" onChange={this.handleSecondNumberChange} />
            </label>
            <input type="button" onClick={this.handleDivSubmit} value="Subtraction" />
            <label>
              Answer:{this.state.ansvalue}
            </label>
          </TabPanel>
          <TabPanel>
            <h2>Multiplication Example</h2>
            <label>
              First Value:
                <input type="number" onChange={this.handleFirstNumberChange} />
            </label>
            <label>
              Second Value:
                <input type="number" onChange={this.handleSecondNumberChange} />
            </label>
            <input type="button" onClick={this.handleMulSubmit} value="Subtraction" />
            <label>
              Answer:{this.state.ansvalue}
            </label>
          </TabPanel>
          <TabPanel>
            <h2>Webservice Example</h2>
            <label>
              <input type="button" onClick={this.handleWSSubmit} value="WSCall" />
            </label>
            <label>
              Web Service Value:
              {this.state.contacts.map((contact) => (
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{contact.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                  <p class="card-text">{contact.company.catchPhrase}</p>
                </div>
              </div>
            ))}
            </label>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }


}

export default App;
