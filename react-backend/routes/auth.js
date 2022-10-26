var express = require('express');
var router = express();
const mysqlConnection  = require('../db/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res) => {
  console.log(req.body);
  let {quit,pass} = req.body;
  const query = `SELECT idusuarios from usuarios where quit = ? and pass = ?;`;
  mysqlConnection.query(query,[quit,pass], (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
