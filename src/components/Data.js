import { useContext } from 'react';
import Context from '../lib/Context';

const Data = () => {
  const value = useContext(Context);
  return (
    <form action='#'>
      <div className='form-inner'>
        <label className='input'>
          {'Имя:'}
          <input
            value={value.formState.name.value}
            readOnly
            name='name'
            type='text'
            placeholder='Имя'
          />
        </label>
        <label className='input'>
          {' Фамилия:'}
          <input
            value={value.formState.surname.value}
            readOnly
            name='surname'
            type='text'
            placeholder='Фамилия'
          />
        </label>
        <label className='input'>
          {'Дата рождения:'}
          <input
            value={value.formState.dateOfBirth.value}
            readOnly
            name='dateOfBirth'
            type='date'
          />
        </label>
        <label className='input'>
          {'Телефон:'}
          <input
            value={value.formState.phone.value}
            readOnly
            name='phone'
            type='tel'
          />
        </label>
        <label className='input'>
          {'Сайт:'}
          <input
            value={value.formState.site.value}
            readOnly
            name='site'
            type='text'
          />
        </label>
        <label className='textarea'>
          {'О себе:'}
          <textarea value={value.formState.info.value} readOnly name='info' />
        </label>
        <label className='textarea'>
          {'Стек технологий:'}
          <textarea
            value={value.formState.technologies.value}
            readOnly
            name='technologies'
          />
        </label>
        <label>
          {'Описание последнего проекта:'}
          <textarea
            value={value.formState.lastProject.value}
            readOnly
            name='lastProject'
          />
        </label>
      </div>
    </form>
  );
};

export default Data;
