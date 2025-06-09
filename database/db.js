const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://nolstankumwenda:Nolstan456@cluster0.cbsousq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('You are connected to your database');
  } catch (e) {
    console.log(`Connection failed, error ====> ${e}`);
  }
};

module.exports = connectToDatabase;
