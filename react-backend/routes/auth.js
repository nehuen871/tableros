var express = require('express');
var router = express();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
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
router.get('/adauth', (req, res) => {
  let {user,pass} = req.body;
  let url = "http://ad/cuentas/20333447658/validar";
  let tokenAD = "";
  let data = {
    "usuario": "20333447658",
    "password": "Troquel1"
  };
  const init = {
    method: 'POST'
  };
  
  fetch('http://ad/cuentas/20333447658/validar', init)
  .then((response) => {
    return response.json(); // or .text() or .blob() ...
  })
  .then((text) => {
    console.log(text);
    // text is the response body
  })
  .catch((e) => {
    console.log( e.message);
  });
});

module.exports = router;
