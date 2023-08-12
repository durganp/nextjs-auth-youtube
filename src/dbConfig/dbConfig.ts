import mongoose, {Connection} from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('mongo was connected successfully');
    });
    connection.on('error', err => {
      console.log('mongoDB connection error' + err);
    });
  } catch (err) {
    console.log('There is something wrong');
    console.log(err);
    process.exit();
  }
}
