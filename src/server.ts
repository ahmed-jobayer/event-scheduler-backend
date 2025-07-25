import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
// let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Connected to MongoDB Atlas');
    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('Server startup error:', err);
  }
}
main();

// process.on('unhandledRejection', (err) => {
//   console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
//   if (server) {
//     server.close(() => process.exit(1));
//   }
//   process.exit(1);
// });

// process.on('uncaughtException', () => {
//   console.log(`😈 uncaughtException is detected , shutting down ...`);
//   process.exit(1);
// });
