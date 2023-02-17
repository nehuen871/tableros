var express = require('express');
var router = express.Router();
const mysqlConnection  = require('../db/db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = `SELECT * from comentarios;`;
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

router.get('/comentariosbyid/:id', function(req, res, next) {
  let {id} = req.params; 
  const query = `SELECT * from comentarios where idcomentarios = ${id};`;
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
  let {usuarios_idusuarios,usuarios_roles_idroles,tableros_idtableros,comentario,fecha,categoria,estado} = req.body.data;
  const query = `INSERT INTO comentarios (usuarios_idusuarios,usuarios_roles_idroles,tableros_idtableros,comentario,fecha,categoria,estado) VALUES (?,?,?,?,?,?,?);`;
  mysqlConnection.query(query,[usuarios_idusuarios,usuarios_roles_idroles,tableros_idtableros,comentario,fecha,categoria,estado], (err, rows, fields) => {
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
  let {idcomentarios,comentario,usuarios_idusuarios,usuarios_roles_idroles,fecha,categoria,estado,tableros_idtableros} = req.body;
  const query = `UPDATE comentarios SET comentario=?,usuarios_idusuarios=?,usuarios_roles_idroles=?,fecha=?,categoria=?,estado=?,tableros_idtableros=? WHERE idcomentarios = ?;`;
  mysqlConnection.query(query,[comentario,usuarios_idusuarios,usuarios_roles_idroles,fecha,categoria,estado,idcomentarios,tableros_idtableros], (err, rows, fields) => {
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

router.post('/cambiarEstado', (req, res) => {
  let {idcomentarios} = req.body;
  const query = `UPDATE comentarios SET estado="Resuelto" WHERE idcomentarios = ?;`;
  mysqlConnection.query(query,[idcomentarios], (err, rows, fields) => {
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
  let {idtableros} = req.body;
  const query = `DELETE from comentarios WHERE idcomentarios = ?;`;
  mysqlConnection.query(query,[idtableros], (err, rows, fields) => {
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
