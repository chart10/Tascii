import mongoose from 'mongoose';

const connectDB = (url) => {
  const connectionPromise = mongoose.connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
  connectionPromise.then((mongoose) =>
    console.log(
      'The connection state for Mongoose is: ' + mongoose.connection.readyState
    )
  );
  return connectionPromise;
};

export default connectDB;
