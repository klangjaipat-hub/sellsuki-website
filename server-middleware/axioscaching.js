const express = require("express");
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const app = express();

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 100000
})

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
  adapter: cache.adapter
})

// Send a GET request to some REST api
api({
  url: 'https://sskadmin.staging.sellsuki.co.th/blogs',
  method: 'get'
})

app.get("/noredis", async (req, res) => {
    api({
        url: 'https://sskadmin.staging.sellsuki.co.th/blogs',
        method: 'get'
      }).then(async (response) => {
        return response ? res.json(response) : res.status(404).json({ result: "Not found!" });
      })
  });

  module.exports = app;