var mongoose = require('mongoose');
var Film = mongoose.model('Film');

module.exports.findAll = function(req, res) {
  Film
    .find()
    .exec(function(err, films) {
      if (!err) {
        res.status(200).json(films);
      } else {

      }
  });
};

module.exports.create = function(req, res) {
  Film.create(req.body, function(err, film) {
    if (!err) {
      res.status(200).json({});
    } else {
      
    }
  });
};