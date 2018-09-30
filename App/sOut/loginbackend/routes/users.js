var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
    password: '',
    database: 'sout',
});


router.post('/', function(req, res, next) {

    var usuario = req.body.usuario;
    var senha = req.body.senha;

    connection.query(
        "SELECT * FROM users WHERE usuario = ? AND senha =?",
        [usuario,senha],function (err,row,fild) {
            if (err){
                console.log(err);
                res.send({'success': false, 'message': 'Sem conexão com banco'});
            }if(row.length > 0){
                res.send({'success': true, 'message': row[0].usuario});
            }else{
                res.send({'success': false, 'message': 'usuario ou senha não encotnrados'});
            }


        }
    )

});

module.exports = router;
