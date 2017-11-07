import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import './index.css';
import axios from 'axios';

// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

axios.get(url, {
  params: {
    'api-key': "ddebb6e03d6f49648bdb0830ba37a061",
    'q': "seoul",
    'begin_date': "19880917",
    'end_date': "19880918",
    'sort': "newest"
  }
})
.then(function (response) {
  console.log(JSON.stringify(response.data.response.docs));
})
.catch(function (error) {
  console.error(error);
});
