var mongoose = require('mongoose');
var Film = mongoose.model('Film');

module.exports.findAll = function(req, res) {
  Film.find().exec(function(err, films) {
      if (!err) {
        return res.status(200).json(films);
      } else {

      }
  });
};
module.exports.find = function(req, res) {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Film.findById(req.params.id, function(err, film) {
      if (!err && film) {
        return res.status(200).json(film);
      }
      return res.status(404).end();
    });
  } else {
    return res.status(404).end();
  }
};
module.exports.create = function(req, res) {
  Film.create(req.body, function(err, film) {
    if (!err) {
      res.status(200).json(film);
    } else {
      
    }
  });
};
module.exports.update = function(req, res) {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Film.findByIdAndUpdate(req.params.id, req.body, function(err, film) {
      if (!err && film) {
        res.status(200).json(film);
      }
      return res.status(404).end();
    });
  } else {
    return res.status(404).end();
  }
};
module.exports.delete = function(req, res) {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Film.findByIdAndRemove(req.params.id, function(err, film) {
      if (!err && film) {
        return res.status(200).json(film);
      } else {
        return res.status(404).end();
      }
    });
  } else {
    return res.status(404).end();
  }
};

