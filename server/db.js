const { default: mongoose } = require('mongoose');

dbConnect = () => {
  mongoose.connect('mongodb+srv://iamkaprekar:5o6gNZvaMtaiXqCv@cluster0.bxo9zd6.mongodb.net/?retryWrites=true&w=majority');
  // mongoose.connect('mongodb://localhost:27017');
};

module.exports = dbConnect;