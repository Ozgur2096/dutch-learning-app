import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  console.log(import.meta.env.VITE_TEST);
  // useState to manage state
  const [myWords, setMyWords] = useState([]);
  // fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/word');
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
    <>
      <h1>Welcome to the React App</h1>
      <p>This is a simple React application.</p>
      <h2>Words</h2>
      <ul>
        {myWords.map(word => (
          <li key={word._id}>
            <h3>{word.word}</h3>
            <p>Definition: {word.definition}</p>
            <p>Synonyms: {word.synonyms.join(', ')}</p>
            <p>Antonyms: {word.antonyms.join(', ')}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
