var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  firstName: {
      type: String
  },
  lastName: {
      type: String
  },
  companyName: {
      type: String
  },
  emailAddress: {
      type: String,
      match: /\S+@\S+\.\S+/,
      unique: true
  },
  username: {
      type: String,
      unique: true
  },
  password: {
      type: String
  }
});


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
