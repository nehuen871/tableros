var express = require('express');
var router = express();
const mysqlConnection  = require('../db/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res) => {
  let {quit,pass} = req.body;
  const query = `SELECT * from usuarios where quit = ? and pass = ?;`;
  mysqlConnection.query(query,[quit,pass], (err, rows, fields) => {
    if(!err) {
      if(rows.length == 0){
        res.json(0);
      }else{
        res.json({data:rows[0]});
      }
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
