var express = require('express');
var router = express.Router();
const mysqlConnection  = require('../db/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = `SELECT * from tableros_has_roles;`;
  mysqlConnection.query(query, (err, rows, fields) => {
    console.log(rows);
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
  let {tableros_idtableros} = req.body;
  let {roles_idroles} = req.body;
  /**INSERT INTO `tableros`.`tableros` (`nombre`, `url`, `accessToken`, `id`) VALUES ('test', 'https://app.powerbi.com/view?r=eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9', 'eyJrIjoiZGQ0YWMwYTctZDZkNS00OTg3LWJlNmEtMDljY2VjNzBiMzUzIiwidCI6IjIzNzc0NzJlLTgwMDQtNDY0OC04NDU2LWJkOTY4N2FmYTE1MCIsImMiOjR9', '37f58113-3e68-464a-bba2-366538375822');
 */
  const query = `INSERT INTO tableros_has_roles (tableros_idtableros,roles_idroles) VALUES (?,?);`;
  mysqlConnection.query(query,[tableros_idtableros,roles_idroles], (err, rows, fields) => {
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
  let {tableros_idtableros,roles_idroles,idtablerohasroles} = req.body;
  const query = `UPDATE tableros_has_roles SET tableros_idtableros=?,roles_idroles=? WHERE idtablerohasroles =?;`;
  mysqlConnection.query(query,[tableros_idtableros,roles_idroles,idtablerohasroles], (err, rows, fields) => {
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
  let {idtablerohasroles} = req.body;
  const query = `DELETE from tableros_has_roles WHERE idtablerohasroles =?;`;
  mysqlConnection.query(query,[idtablerohasroles], (err, rows, fields) => {
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
