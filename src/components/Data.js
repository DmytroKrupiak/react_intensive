import React, { Component } from 'react';

class Data extends Component {
  render() {
    return (
      <form action='#'>
        <div className='form-inner'>
          <label className='input'>
            {'Имя:'}
            <input
              value={this.props.state.name}
              readOnly
              name='name'
              type='text'
              placeholder='Имя'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label className='input'>
            {' Фамилия:'}
            <input
              value={this.props.state.surname}
              readOnly
              name='surname'
              type='text'
              placeholder='Фамилия'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label className='input'>
            {'Дата рождения:'}
            <input
              value={this.props.state.dateOfBirth}
              readOnly
              name='dateOfBirth'
              type='date'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label className='input'>
            {'Телефон:'}
            <input
              value={this.props.state.phone}
              readOnly
              name='phone'
              type='tel'
              placeholder='7-7777-77-77'
              maxLength={13}
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label className='input'>
            {'Сайт:'}
            <input
              value={this.props.state.site}
              readOnly
              name='site'
              type='text'
              placeholder='https//'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label className='textarea'>
            {'О себе:'}
            <textarea
              value={this.props.state.info}
              readOnly
              name='info'
              placeholder='О себе*'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label className='textarea'>
            {'Стек технологий:'}
            <textarea
              value={this.props.state.technologies}
              readOnly
              name='technologies'
              placeholder='Опишите ваш стек технологий'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
          <label>
            {'Описание последнего проекта:'}
            <textarea
              value={this.props.state.lastProject}
              readOnly
              name='lastProject'
              placeholder='Проект'
              onChange={(e) => this.props.handleChange(e)}
            />
          </label>
        </div>
      </form>
    );
  }
}

export default Data;
