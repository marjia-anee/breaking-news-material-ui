import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch ('https://newsapi.org/v2/top-headlines?country=us&apiKey=f786f733d76d48089268f0578754c164')
  //   .then(response => response.json())
  //   .then(data => setArticles(data.articles))
  // }, [])
  useEffect (() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f786f733d76d48089268f0578754c164';
    axios (url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
