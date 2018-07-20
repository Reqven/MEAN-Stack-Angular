var mongoose = require( 'mongoose' );

var filmSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  }
});

mongoose.model('Film', filmSchema);
