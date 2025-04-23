import React from 'react';
import { getCookie } from '../utility/getCookie';
import '../styles/CreateWordCard.css';

export const CreateWordCard = () => {
  const createNewWord = async () => {
    const word = document.getElementById('word').value;
    const definition = document.getElementById('definition').value;
    // const synonyms = document.getElementById('synonyms').value.split(',');
    // const antonyms = document.getElementById('antonyms').value.split(',');
    const userId = getCookie('userId');
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          word,
          definition,
          // synonyms,
          // antonyms,
        }),
      });
      if (response.ok) {
        alert('Word card created successfully!');
      } else {
        alert('Error creating word card!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='word-card-container'>
      <h2>Create Word Card</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          createNewWord();
        }}
      >
        <div className='form-group'>
          <label htmlFor='word'>Word</label>
          <input type='text' id='word' name='word' required />
        </div>
        <div className='form-group'>
          <label htmlFor='definition'>Definition</label>
          <input type='text' id='definition' name='definition' required />
        </div>
        {/* <div className="form-group">
          <label htmlFor="synonyms">Synonyms</label>
          <input type="text" id="synonyms" name="synonyms" />
        </div>
        <div className="form-group">
          <label htmlFor="antonyms">Antonyms</label>
          <input type="text" id="antonyms" name="antonyms" />
        </div> */}
        <button type='submit'>Create Word Card</button>
      </form>
    </div>
  );
};
