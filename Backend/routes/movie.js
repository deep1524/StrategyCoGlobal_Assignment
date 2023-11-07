const express = require("express");
const axios = require('axios');
const app = express.Router();

app.get('/api/movies', async (req, res) => {
  const  searchQuery  = req.query;
console.log(searchQuery);
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3cc92a8&s=${searchQuery.q}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.get("/:id", async (req, res) => {
  let id=req.params.id;
  console.log(id);
  id.toString()
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=3cc92a8&i=${id}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = app;