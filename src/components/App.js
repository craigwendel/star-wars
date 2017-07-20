import React, {Component} from 'react'
import '../styles/App.css'

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

  constructor (props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange (event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleSubmit (event) {
    event.preventDefault()
    const pilot = this.state.value
    this.setState({pilot: pilot,
      value: ''
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentWillMount() {
    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then((json) => {
      let vehicles = json.results
      this.setState({vehicles: vehicles})
    })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render () {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.

    */
    //  let vehicles = this.state.vehicles
    /*

    The App component needs the following:
     jumbotron section, form section, vehicle cards section.
     Your form will also need a header in which you will pass the state of the form upon submit.
     */

    return (
      <div className="App">
        <div className="jumbotron">
          <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <h1 className="display-3">Star Wars</h1>
          <p className="lead">The vehicles of Star Wars</p>
          </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>What is your name, pilot?</label>
            <input type="text" name="name" value={this.state.value} onChange={this.handleNameChange} placeholder="Enter your name" />
            <input type="submit" name="submit" value="Submit" />
          </form>
          <div>
            <h4>{this.state.pilot}</h4>
          </div>
        </div>
        <div className="vehicle-results">
        {this.state.vehicles.map( (result) =>
          <div className="card" key={result.name}>
          <div className="card-deck">
          <div className="card-block">
             <h4 className="card-title">Vehicle: {result.name}</h4>
             <h3 className="card-text">Model: {result.model}</h3>
           <h4><strong>Specs:</strong></h4>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">{result.manufacturer}</li>
             <li className="list-group-item">{result.vehicle_class}</li>
             <li className="list-group-item">{result.passengers}</li>
             <li className="list-group-item">{result.crew}</li>
             <li className="list-group-item">{result.length}</li>
             <li className="list-group-item">{result.max_atmosphering_speed}</li>
             <li className="list-group-item">{result.cargo_capacity}</li>
           </ul>
          </div>
          </div>
          </div>
        )}
      </div>
    </div>
    )
  }
}

export default App
