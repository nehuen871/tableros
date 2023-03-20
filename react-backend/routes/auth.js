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
router.post('/adauth', (req, res) => {
  let {quit,pass} = req.body;
  response = "";
  try {
    let url = "https://servicios-hml.gcba.gob.ar/ad/v1.2/cuentas/"+quit;
    const init = {
      method: 'GET',
      headers:{
        'client_id': 'bf7188c38b194b0c941947cc39b9a964',
        'client_secret': '428062620AB94bb6B0036f87D857325E'
      }
    };
    fetch(url, init)
    .then((response) => {
      return response.json(); // or .text() or .blob() ...
    })
    .then((text) => {
      res.json(text);
    })
    .catch((e) => {
      console.log(e);
    });
    } catch (error) {
      console.log(error);
    }
});

module.exports = router;
