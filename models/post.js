var mongoose = require('mongoose');
var User = require('./user');
var Schema = mongoose.Schema;

var postSchema = new Schema({

  content: String,
  created_at: { type: Date },
  author: { type: Schema.Types.ObjectId, ref: 'user' }

});

postSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
