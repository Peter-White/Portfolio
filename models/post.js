var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

  content: String,
  created_at: { type: Date }

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
