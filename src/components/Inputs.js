import React, { useContext } from 'react';
import Context from '../lib/Context';



const Inputs = () => {
   
  const value = useContext(Context)

    return (
      <>
        <label className='input'>
          {'Имя:*'}
          <input
            name='name'
            type='text'
            placeholder='Имя'
            onChange={(e) => value.handleChange('name',e.target.value,value.dispatch,value.formState)}
            onBlur =  {(e)=> value.handleFocus('name', e.target.value, value.dispatch, value.formState)}
          />
        {value.formState.name.hasError && (
            <p>{value.formState.name.error}</p>
          )}
        </label>
        <label className='input'>
          {' Фамилия:*'}
          <input
            name='surname'
            type='text'
            placeholder='Фамилия'
            onChange={(e) => value.handleChange('surname',e.target.value,value.dispatch,value.formState)}
            onBlur =  {(e)=> value.handleFocus('surname', e.target.value, value.dispatch, value.formState)}
          />
            {value.formState.surname.hasError && (
            <p>{value.formState.surname.error}</p>
          )}
        </label>
        <label className='input'>
          {'Дата рождения:*'}
          <input
            name='dateOfBirth'
            type='date'
            onChange={(e) => value.handleChange('dateOfBirth',e.target.value,value.dispatch,value.formState)}
            onBlur =  {(e)=> value.handleFocus('dateOfBirth', e.target.value, value.dispatch, value.formState)}
          />
            {value.formState.dateOfBirth.hasError && (
            <p>{value.formState.dateOfBirth.error}</p>)}
        </label>
        <label className='input'>
          {'Телефон:*'}
          <input
            name='phone'
            type='tel'
            placeholder='7-7777-77-77'
            maxLength='12'
            onChange={(e) => value.handleChange('phone',e.target.value,value.dispatch,value.formState,e)}
            onBlur =  {(e)=> value.handleFocus('phone', e.target.value, value.dispatch, value.formState)}
          />
            {value.formState.phone.hasError && (
            <p>{value.formState.phone.error}</p>
          )}
        </label>
        <label className='input'>
          {'Сайт:*'}
          <input
            name='site'
            type='text'
            placeholder='https://'
            onChange={(e) => value.handleChange('site',e.target.value,value.dispatch,value.formState)}
            onBlur =  {(e)=> value.handleFocus('site', e.target.value, value.dispatch, value.formState)}
          />
            {value.formState.site.hasError && (
            <p>{value.formState.site.error}</p>)}
        </label>
      </>
    );

}

export default Inputs;
