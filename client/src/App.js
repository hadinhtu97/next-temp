import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      testApi: ''
    }

  }

  componentDidMount = () => {
    this.testApi();
  }

  testApi = () => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(res => this.setState({ testApi: res.message }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <h1>react-node-temp</h1>
        <p>{this.state.testApi}</p>
      </div>
    )
  }
}

export default App;
