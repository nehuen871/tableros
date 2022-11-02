var express = require('express');
var router = express.Router();
const mysqlConnection  = require('../db/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = `SELECT * from roles;`;
  mysqlConnection.query(query, (err, rows, fields) => {
    if(!err) {
      if(rows.length == 0){
        res.json(0);
      }else{
        res.json({data:rows});
      }
    } else {
      res.json(err);
    }
  });
});

router.post('/insert', (req, res) => {
  console.log(req.body);
  let {nombre} = req.body;
  /**INSERT INTO `tableros`.`tableros` (`nombre`, `url`, `accessToken`, `id`) VALUES ('test', 'https://app.powerbi.com/view?r=eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9', 'eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9', '37f58113-3e68-464a-bba2-366538375822');
 */
  const query = `INSERT INTO roles ('nombre) VALUES ('?');`;
  mysqlConnection.query(query,[nombre], (err, rows, fields) => {
    if(!err) {
      if(rows.length == 0){
        res.json(0);
      }else{
        res.json(rows);
      }
    } else {
      res.json(err);
    }
  });
});

/**UPDATE `tableros`.`tableros` SET `nombre` = 'test31' WHERE (`idtableros` = '3');
 */

router.post('/edit', (req, res) => {
  console.log(req.body);
  let {nombre,idroles} = req.body;
  const query = `UPDATE roles SET nombre='?' WHERE idroles = '?';`;
  mysqlConnection.query(query,[nombre,idroles], (err, rows, fields) => {
    if(!err) {
      if(rows.length == 0){
        res.json(0);
      }else{
        res.json(rows);
      }
    } else {
      res.json(err);
    }
  });
});


/**DELETE FROM `tableros`.`tableros` WHERE (`idtableros` = '4'); */
router.post('/delete', (req, res) => {
  console.log(req.body);
  let {idroles} = req.body;
  const query = `DELETE from roles WHERE idroles = ?;`;
  mysqlConnection.query(query,[idroles], (err, rows, fields) => {
    if(!err) {
      if(rows.length == 0){
        res.json(0);
      }else{
        res.json(rows);
      }
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
