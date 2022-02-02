export const initialState = {
  name: { value: '', touched: false, hasError: true, error: '' },
  surname: { value: '', touched: false, hasError: true, error: '' },
  dateOfBirth: { value: '', touched: false, hasError: true, error: '' },
  phone: { value: '', touched: false, hasError: true, error: '' },
  site: { value: '', touched: false, hasError: true, error: '' },
  info: { value: '', touched: false, hasError: true, error: '' },
  technologies: { value: '', touched: false, hasError: true, error: '' },
  lastProject: { value: '', touched: false, hasError: true, error: '' },
  isFormValid: false,
};

export const formsReducer = (state, action) => {
  switch (action.type) {
    case 'change':
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;

      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    case 'reset':
      return init(initialState);
    default:
      return state;
  }
};

export const phoneMask = (phone) => {
  return phone
    .replace(/\D/g, '')
    .replace(/^(\d)/, '$1-')
    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{5})\d/, '$1-')
    .replace(/(\d{2})(\d{2})+?$/, '$1-$2');
};

export const validateInput = (name, value) => {
  let hasError = false,
    error = '';
  if (value === '') {
    hasError = true;
    error = 'Поле обязательно для заполнения';
  } else {
    switch (name) {
      case 'name':
      case 'surname':
        if (value[0] !== value[0].toUpperCase()) {
          hasError = true;
          error = 'Первая буква должна быть заглавной';
        } else if (!/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(value)) {
          hasError = true;
          error = 'Некорректные данные! Пожалуйста не используйте  спецсимволы';
        } else {
          hasError = false;
          error = '';
        }
        break;
      case 'site':
        if (!/^https:\/\//.test(value)) {
          hasError = true;
          error = 'Сайт должен начинаться с https://';
        } else {
          hasError = false;
          error = '';
        }
        break;
      case 'phone':
        if (value.length < 11) {
          hasError = true;
          error = 'Номер не соответствует формату 7-7777-77-77';
        } else {
          hasError = false;
          error = '';
        }
        break;
      default:
        break;
    }
  }
  return { hasError, error };
};

export const init = (state) => {
  return state;
};
