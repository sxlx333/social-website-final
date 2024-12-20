import { useState, useRef } from 'react';
import style from './FeedForm.module.css';

export function FeedForm() {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    const minSize = 1;
    const maxSize = 1337;

    if (text.length < minSize || text.length > maxSize) {
      return;
    }

    fetch('https://social-website-final-backend.onrender.com/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setText('');
          if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height
          }
        }
      })
      .catch(console.error);
  }

  return (
    <div className="col-md-10 mx-auto col-lg-6 col-xl-5">
      <form onSubmit={handleFormSubmit} className={style.feedForm}>
        <label
          htmlFor="post_text"
          className={`${style.feedFormLabel} text-center`}
        >
          Tavo naujo įrašo tekstas
        </label>
        <textarea
          value={text}
          onInput={(e) => {
            setText(e.target.value);
            if (textareaRef.current) {
              textareaRef.current.style.height = 'auto';
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
          }}
          id="post_text"
          ref={textareaRef}
          className={style.feedFormTextarea}
          rows="1"
        />
        <button
          type="submit"
          className={`${style.feedFormButton} btn btn-primary`}
        >
          Sukurti įrašą
        </button>
      </form>
    </div>
  );
}
