import React, { Component } from 'react';
import Buttons from './Buttons';
import Inputs from './Inputs';
import Textareas from './Textareas';

class Form extends Component {
  render() {
    return (
      <form action='#'>
        <div className='form-inner'>
          <Inputs
            state={this.props.state}
            handleChange={this.props.handleChange}
          />
          <Textareas
            state={this.props.state}
            handleChange={this.props.handleChange}
          />
        </div>
        <Buttons handleReset={this.props.handleReset} 
        handleSubmit={this.props.handleSubmit}/>
      </form>
    );
  }
}

export default Form;
