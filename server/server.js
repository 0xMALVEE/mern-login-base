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

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'alveedev8141@gmail.com',
//     pass: 'juasvgkurnmnepdi'
//   }
// });

// var mailOptions = {
//   from: 'alveedev8141@gmail.com',
//   to: 'm.alvee8141@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

