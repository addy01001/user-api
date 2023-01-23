import mongoose from 'mongoose'
import config from '../config'
const retryIntervalInMS = 5000;

const options:mongoose.ConnectOptions = {
  autoIndex:true
};

export const establishConnection = async () => {
  try {
    const dburl = config.dataBase.url as string;
    global.logger.silly(`MongoDB url ${dburl}`)
    global.logger.info(`MongoDB connection Initiated`)
    await mongoose.connect(dburl, options)
    global.logger.info(`MongoDB is connected`)
  } catch (err) {
    global.logger.error(err instanceof Error ? err.message : "Mongodb connection error")
    setTimeout(establishConnection, retryIntervalInMS);
  }
};

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    logger.info(`Mongoose default connection disconnected through app termination`)
    process.exit(0);
  });
});
