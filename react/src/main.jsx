import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/UI/button'
import Input from './components/UI/input'
import Output from './components/UI/output'
import {serverURL, getGender, minSymbols} from './components/UI/request'
// import App from './App'
// import './index.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      gender: "",
      message: ""
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.inputValue.length <= minSymbols) {
      this.setState({message: "Is too small name"});
    } else {
      getGender(`${serverURL}?name=${this.state.inputValue}`)
      .then((result) => {
        this.setState({gender: result.gender})
      })
      // .then(alert(this.state.inputValue + 'is' + result.gender))
      // this.setState({inputValue: ""})
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleValueChange} value={this.state.value} />
          <Button value={'Submit'} />
        </form>
        <Output name={this.state.inputValue} value={this.state.gender}/>
      </div>

    )
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
const element = <Main />;

root.render(element);