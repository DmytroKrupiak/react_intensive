import { useContext, useRef } from 'react';
import Context from '../lib/Context';

const Textareas = () => {
  const value = useContext(Context);
  const infoRef = useRef();
  const technologiesRef = useRef();
  const lastProjectRef = useRef();

  return (
    <>
      <label className='textarea'>
        {'О себе:*'}
        <textarea
          name='info'
          ref={infoRef}
          placeholder='О себе*'
          onChange={(e) =>
            value.handleChange(
              'info',
              e.target.value,
              value.dispatch,
              value.formState
            )
          }
          onBlur={(e) =>
            value.handleFocus(
              'info',
              e.target.value,
              value.dispatch,
              value.formState
            )
          }
        />
        {value.formState.info.hasError && <p>{value.formState.info.error}</p>}
        {infoRef.current?.value !== '' &&
          infoRef.current?.value.length <= 600 && (
            <p>Осталось {600 - infoRef.current?.value.length} символов</p>
          )}
        {infoRef.current?.value.length > 600 && (
          <p>Превышен лимит символов в поле</p>
        )}
      </label>
      <label className='textarea'>
        {'Стек технологий:*'}
        <textarea
          name='technologies'
          ref={technologiesRef}
          placeholder='Опишите ваш стек технологий'
          onChange={(e) =>
            value.handleChange(
              'technologies',
              e.target.value,
              value.dispatch,
              value.formState
            )
          }
          onBlur={(e) =>
            value.handleFocus(
              'technologies',
              e.target.value,
              value.dispatch,
              value.formState
            )
          }
        />
        {value.formState.technologies.hasError && (
          <p>{value.formState.technologies.error}</p>
        )}
        {technologiesRef.current?.value !== '' &&
          technologiesRef.current?.value.length <= 600 && (
            <p>
              Осталось {600 - technologiesRef.current?.value.length} символов
            </p>
          )}
        {technologiesRef.current?.value.length > 600 && (
          <p>Превышен лимит символов в поле</p>
        )}
      </label>
      <label>
        {'Описание последнего проекта:*'}
        <textarea
          name='lastProject'
          ref={lastProjectRef}
          placeholder='Проект'
          onChange={(e) =>
            value.handleChange(
              'lastProject',
              e.target.value,
              value.dispatch,
              value.formState
            )
          }
          onBlur={(e) =>
            value.handleFocus(
              'lastProject',
              e.target.value,
              value.dispatch,
              value.formState
            )
          }
        />
        {value.formState.lastProject.hasError && (
          <p>{value.formState.lastProject.error}</p>
        )}
        {lastProjectRef.current?.value !== '' &&
          lastProjectRef.current?.value.length <= 600 && (
            <p>
              Осталось {600 - lastProjectRef.current?.value.length} символов
            </p>
          )}
        {lastProjectRef.current?.value.length > 600 && (
          <p>Превышен лимит символов в поле</p>
        )}
      </label>
    </>
  );
};

export default Textareas;
