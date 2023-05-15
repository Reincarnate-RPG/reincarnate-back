import { app } from './config/app';

const port = process.env.PORT;

console.log('⚡️ Connected at MongoDB ⚡️');
app.listen(port || 3333, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
