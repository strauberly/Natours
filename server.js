const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  process.exit(1);
  console.log('Uncaught REJECTION! Shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });

// start server

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() =>
    // console.log(con.connections);
    console.log('DB connection successful')
  );

const app = require('./app');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});

// app.listen(port, () => {
//   console.log(`app running on port ${port}...`);
// });

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  process.exit(1);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('sigterm received, slow shutdown enabled');
  server.close(() => {
    console.log('process terminated');
  });
});

//  Instructor admits utilising such practice is debatable
// in regards to best practice so I am excluding it//

// const server = app.listen(port, () => {
//   console.log(`app running on port ${port}...`);
// });
// const server = app.listen(port, () => {
//   console.log(`app running on port ${port}...`);
// });

// process.on('uncaughtException', (err) => {
//   console.log('Uncaught Exception!!! Shutting down...');
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
