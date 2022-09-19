import { app } from './config/app';
import { connect } from 'mongoose';

const port = process.env.PORT;
const DB_USER = process.env.MONGO_USER;
const DB_PASS = process.env.MONGO_PASS;

connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@reincarnate0.tjb9keh.mongodb.net/core?retryWrites=true&w=majority`
)
  .then(() => {
    console.log('⚡️ Connected at MongoDB ⚡️');
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch(err => {
    console.log({ Error: err });
  });
