import { Component } from 'react';

class Textareas extends Component {
  render() {
    return (
      <>
        <label className='textarea'>
          {'О себе:*'}
          <textarea
            name='info'
            placeholder='О себе*'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.info}</p>
          {this.props.state.info !== '' &&
            this.props.state.info.length <= 600 && (
              <p>Осталось {600 - this.props.state.info.length} символов</p>
            )}
          {this.props.state.info.length > 600 && (
            <p>Превышен лимит символов в поле</p>
          )}
        </label>
        <label className='textarea'>
          {'Стек технологий:*'}
          <textarea
            name='technologies'
            placeholder='Опишите ваш стек технологий'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.technologies}</p>
          {this.props.state.technologies !== '' &&
            this.props.state.technologies.length <= 600 && (
              <p>
                Осталось {600 - this.props.state.technologies.length} символов
              </p>
            )}
          {this.props.state.technologies.length > 600 && (
            <p>Превышен лимит символов в поле</p>
          )}
        </label>
        <label>
          {'Описание последнего проекта:*'}
          <textarea
            name='lastProject'
            placeholder='Проект'
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>{this.props.state.errors.lastProject}</p>
          {this.props.state.lastProject !== '' &&
            this.props.state.lastProject.length <= 600 &&
            600 - this.props.state.lastProject.length !== 0 && (
              <p>
                Осталось {600 - this.props.state.lastProject.length} символов
              </p>
            )}
          {this.props.state.lastProject.length > 600 && (
            <p>Превышен лимит символов в поле</p>
          )}
        </label>
      </>
    );
  }
}

export default Textareas;
