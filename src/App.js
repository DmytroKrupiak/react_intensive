import React, { useEffect, useReducer, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Data from './components/Data';
import Context from './lib/Context';
import {
  initialState,
  formsReducer,
  phoneMask,
  validateInput,
  init,
} from './lib/utils';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [formState, dispatch] = useReducer(formsReducer, initialState, init);

  const handleChange = (name, value, dispatch, formState, e) => {
    if (name === 'phone') {
      e.target.value = phoneMask(e.target.value);
    }
    const { hasError, error } = validateInput(name, value);
    let isFormValid = false;

    for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        isFormValid = false;
        break;
      }
    }
    dispatch({
      type: 'change',
      data: {
        name,
        value,
        hasError,
        error,
        touched: false,
        isFormValid,
      },
    });
  };

  const handleFocus = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;
    for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
        isFormValid = false;
        break;
      } else if (key !== name && item.hasError) {
        isFormValid = false;
        break;
      }
    }

    dispatch({
      type: 'change',
      data: { name, value, hasError, error, touched: true, isFormValid },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;

    for (const name in formState) {
      const item = formState[name];
      const { value } = item;
      const { hasError, error } = validateInput(name, value);

      if (hasError) {
        isFormValid = false;
      }
      if (name) {
        dispatch({
          type: 'change',
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
          },
        });
      }
    }
  };

  const handleReset = () => {
    dispatch({
      type: 'reset',
    });
  };

  const value = {
    formState,
    handleChange,
    handleFocus,
    dispatch,
    handleReset,
    handleSubmit,
  };

  useEffect(() => {
    if (formState.isFormValid) setTitle('Ваша анкета');
    else setTitle('Создание анкеты');
  }, [formState.isFormValid]);

  return (
    <div className='App'>
      <Header title={title} />
      <Context.Provider value={value}>
        {!formState.isFormValid && <Form />}
        {formState.isFormValid && <Data formState={formState} />}
      </Context.Provider>
    </div>
  );
};

export default App;
