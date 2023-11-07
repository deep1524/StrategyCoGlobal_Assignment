
const express = require('express');

const movieRouter =require('./routes/movie');

const PORT = 5000;
const cors=require("cors");
const app = express();
app.use(cors({
  origin:"*",
}))
app.use(express.json());

app.use("/",movieRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
