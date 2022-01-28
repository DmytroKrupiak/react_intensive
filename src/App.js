import Form from './components/Form';
import Header from './components/Header';
import './App.css';
import Data from './components/Data';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Создание анкеты',
      name: '',
      surname: '',
      dateOfBirth: '',
      phone: '',
      site: '',
      info: '',
      technologies: '',
      lastProject: '',
      submit: false,
      errors: {},
    };
  }

  validateInputs = (e) => {
    const { name, value } = e.target;
    const valid = () => {
      this.setState((prev) => {
        return {
          ...prev,
          [name]: value.trim(),
          errors: {
            ...this.state.errors,
            [name]: '',
          },
        };
      });
    };

    if (value === '') {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          [name]: 'Поле обязательно для заполнения',
        },
      });
    } else {
      valid();
      if (name === 'name' || name === 'surname') {
        if (value[0] !== value[0].toUpperCase()) {
          this.setState({
            ...this.state,
            errors: {
              ...this.state.errors,
              [name]: 'Первая буква должна быть заглавной',
            },
          });
        } else {
          valid();
        }
      }
      if (name === 'site') {
        if (!/^https\/\//.test(value)) {
          this.setState({
            ...this.state,
            errors: {
              ...this.state.errors,
              [name]: 'Сайт должен начинаться с https//',
            },
          });
        } else {
          valid();
        }
      }
      if (name === 'phone') {
        const a = e.target.value
          .replace(/\D/g, '')
          .match(/(\d{1})(\d{0,4})(\d{0,2})(\d{0,2})/);
        e.target.value = !a[2]
          ? a[1]
          : a[1] +
            '-' +
            a[2] +
            (a[3] ? '-' + a[3] : '') +
            (a[4] ? '-' + a[4] : '');
        if (e.target.value.length < 12) {
          this.setState({
            ...this.state,
            errors: {
              ...this.state.errors,
              [name]: 'Номер не соответствует формату 7-7777-77-77',
            },
          });
        } else {
          this.setState({
            ...this.state,
            errors: {
              ...this.state.errors,
              [name]: '',
            },
            [name]: e.target.value,
          });
        }
      }
    }
  };

  handleChange = (e) => {
    this.validateInputs(e);
  };

  handleReset = (e) => {
    this.setState({
      name: '',
      surname: '',
      dateOfBirth: '',
      phone: '',
      site: '',
      info: '',
      technologies: '',
      lastProject: '',
      errors: {},
      submit: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const keys = Object.keys(this.state);

    for (let key of keys) {
      if (this.state[key] === '') {
        this.setState((prev) => {
          return {
            ...prev,
            errors: {
              ...prev.errors,
              [key]: 'Поле обязательно для заполнения',
            },
          };
        });
      }
    }
    if (
      this.state.name !== '' &&
      this.state.surname !== '' &&
      this.state.phone !== '' &&
      this.state.dateOfBirth !== '' &&
      this.state.site !== '' &&
      this.state.info !== '' &&
      this.state.technologies !== '' &&
      this.state.lastProject !== ''
    ) {
      this.setState({
        ...this.state,
        title: 'Ваша анкета',
        submit: true,
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Header title={this.state.title} />
        {this.state.submit === false && (
          <Form
            state={this.state}
            handleChange={this.handleChange}
            handleReset={this.handleReset}
            handleSubmit={this.handleSubmit}
          />
        )}
        {this.state.submit && <Data state={this.state} />}
      </div>
    );
  }
}

export default App;
