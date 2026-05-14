const express = require('express');
const app = express();
//import axios from 'axios';

app.get('/health', (req, res) => {
  //const responseData = axios.get('https://login.sellsuki.co.th/blogs');
  return res.writeHead(200).end()
});

module.exports = app;