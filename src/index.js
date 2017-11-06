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

// https://developer.nytimes.com/

// https://apigee.com/console/nytimes

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json" +
//           "?api-key=ddebb6e03d6f49648bdb0830ba37a061" + "&" + "q=" + "korea";

// axios.get(url)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data.response.docs));
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
