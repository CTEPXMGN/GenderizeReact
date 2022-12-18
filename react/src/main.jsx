import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/UI/button/button'
import Input from './components/UI/input/input'
import Output from './components/UI/output'
import {serverURL, getGender, minSymbols} from './components/UI/request'
import "./main.css"
// import App from './App'
// import './index.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      name: "",
      gender: "",
      message: "",
      isCorrect: false,
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
      this.setState({message: "The name is too small"});
    } else {
      getGender(`${serverURL}?name=${this.state.inputValue}`)
      .then((result) => {
        this.setState({name: result.name, gender: result.gender, isCorrect: true})
      })
      this.setState({inputValue: ""})
    }
  }

  render() {
    let outMessage;
    if (this.state.isCorrect) {
      outMessage = <Output name={this.state.name + ' is'} value={this.state.gender} />
    } else {
      outMessage = <Output value={this.state.message} />
    }

    return (
      <div className='wrapper'>
        <form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleValueChange} value={this.state.value} />
          <Button value={'Submit'} />
        </form>
        {outMessage}
      </div>

    )
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
const element = <Main />;

root.render(element);