import { Component } from 'react';

class Inputs extends Component {
  render() {
    return (
      <>
        <label className='input'>
          {'Имя:*'}
          <input
            name='name'
            type='text'
            placeholder='Имя'
            onChange={(e) => this.props.handleChange(e)}
          />
           <p>{this.props.state.errors.name}</p>
        </label>
        <label className='input'>
          {' Фамилия:*'}
          <input
            name='surname'
            type='text'
            placeholder='Фамилия'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.surname}</p>
        </label>
        <label className='input'>
          {'Дата рождения:*'}
          <input
            name='dateOfBirth'
            type='date'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.dateOfBirth}</p>
        </label>
        <label className='input'>
          {'Телефон:*'}
          <input
            name='phone'
            type='tel'
            placeholder='7-7777-77-77'
            maxLength='13'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.phone}</p>
        </label>
        <label className='input'>
          {'Сайт:*'}
          <input
            name='site'
            type='text'
            placeholder='https//'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.site}</p>
        </label>
      </>
    );
  }
}

export default Inputs;
