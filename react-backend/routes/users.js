var express = require('express');
var router = express.Router();
const mysqlConnection  = require('../db/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = `SELECT * from usuarios;`;
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
  let {nombre,apellido,quit,pass,roles_idroles} = req.body;
  /**INSERT INTO `usuarios`.`usuarios` (`nombre`, `url`, `accessToken`, `id`) VALUES ('test', 'https://app.powerbi.com/view?r=eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9', 'eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9', '37f58113-3e68-464a-bba2-366538375822');
 */
  const query = `INSERT INTO usuarios ('nombre, 'apellido', 'quit', 'pass','roles_idroles') VALUES ('?','?','?','?','?');`;
  mysqlConnection.query(query,[quit,pass], (err, rows, fields) => {
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

/**UPDATE `usuarios`.`usuarios` SET `nombre` = 'test31' WHERE (`idusuarios` = '3');
 */

router.post('/edit', (req, res) => {
  console.log(req.body);
  let {nombre,apellido,quit,pass,roles_idroles,idusuarios} = req.body;
  const query = `UPDATE usuarios SET nombre='?', apellido='?', quit='?', pass='?',roles_idroles='?' WHERE idusuarios = '?';`;
  mysqlConnection.query(query,[nombre,apellido,quit,pass,roles_idroles,idusuarios], (err, rows, fields) => {
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


/**DELETE FROM `usuarios`.`usuarios` WHERE (`idusuarios` = '4'); */
router.post('/delete', (req, res) => {
  console.log(req.body);
  let {idusuarios} = req.body;
  const query = `DELETE from usuarios WHERE idusuarios = ?;`;
  mysqlConnection.query(query,[quit], (err, rows, fields) => {
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
