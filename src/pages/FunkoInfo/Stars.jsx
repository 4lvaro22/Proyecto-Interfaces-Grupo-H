import { useEffect, useState } from 'react';
import './../../assets/styles/stars.css';

export const Stars = ({ oldRating, updateRating }) => {
  const [rating, setRating] = useState(oldRating ?? 0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (updateRating) { updateRating(rating); }

    return () => {
      if (updateRating) { updateRating(0); }
    };
  }, [rating]);

  const updateHover = (index) => {
    if (oldRating === undefined) { setHover(index); }
  };

  const updateRate = (index) => {
    if (oldRating === undefined) {
      if (rating === index) setRating(0);
      else { setRating(index); }
    }
  };

  return (
    <fieldset className='d-flex' id='startRating' role='radiogroup'>
      <legend className='visually-hidden'>
        Selecciona las estrellas de valoración
      </legend>

      <input
        type='radio' className='visually-hidden'
        tabIndex={0}
        aria-title='Valoración 0 de 5'
        aria-labelledby='starRate'
        role='radio'
        onClick={() => {
          updateRate(0);
          updateHover(0);
        }}
      />
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            tabIndex={-1}
            className={(oldRating === undefined) ? 'rating ' : '' + index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => { updateRate(index); }}
            onKeyDown={(e) => { if (e.key === 'Enter') { updateRate(index); } }}
            onKeyUp={(e) => { if (e.key === 'Enter') { updateRate(rating); } }}
            onMouseEnter={() => { updateHover(index); }}
            onMouseLeave={() => { updateHover(rating); }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: `${index <= (hover || rating) ? '#000000' : '#000000'}`
            }}
          >
            <input
              type='radio' className='visually-hidden'
              tabIndex={0}
              aria-title={'Valoración ' + index + ' de 5'}
              aria-labelledby='starRate'
              role='radio'
              onClick={() => {
                updateRate(index);
                updateHover(index);
              }}
            />
            <i tabIndex={-1} className={(index <= (hover || rating)) ? 'bi bi-star-fill shadow-sm' : 'bi bi-star shadow-sm'} />
          </button>
        );
      })}
    </fieldset>
  );
};

export default Stars;
