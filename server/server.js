const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(cors())
const jsonParser = express.json()
app.use(jsonParser);

app.use("/users", userRoutes)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = 'mongodb://localhost:27017/sense55';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
