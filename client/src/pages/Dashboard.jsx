import { IoIosAddCircle } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { getCookie } from '../utility/getCookie';
import { CreateWordCard } from '../components/CreateWordCard';
import '../styles/Dashboard.css';

export const Dashboard = () => {
  const [myWords, setMyWords] = useState([]);
  const [showAddWord, setShowAddWord] = useState(false);
  const userId = getCookie('userId');

  // delete word
  const deleteWord = async wordId => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/word/' + wordId,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        setMyWords(myWords.filter(w => w._id !== wordId));
      } else {
        alert('Error deleting word card!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + '/word' + `/${userId}`
        );
        const data = await response.json();
        console.log(data);
        setMyWords(data);
        console.log(myWords);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p>This will be a protected route, I hope</p>
      {/* add new words */}

      <IoIosAddCircle
        onClick={() => setShowAddWord(!showAddWord)}
        className='add-word'
        title='Add Word'
      />
      {showAddWord && <CreateWordCard />}

      <h2>Words</h2>
      <ul>
        {myWords.map(word => (
          <li key={word._id}>
            <h3>{word.word}</h3>
            <p>Definition: {word.definition}</p>
            <p>Synonyms: {word.synonyms.join(', ')}</p>
            <p>Antonyms: {word.antonyms.join(', ')}</p>
            <button
              className='delete-word'
              onClick={() => {
                deleteWord(word._id);
              }}
              title='Delete Word'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
