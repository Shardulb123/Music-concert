// var express = require('express');
// var router = express.Router();


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

let mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/task');

mongoose.connect('mongodb+srv://Sharduldbbackend:Backend75db@mytasker.xohcp.mongodb.net/task?retryWrites=true&w=majority');

let schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    }
  }
)

module.exports = mongoose.model('tasks', schema);
