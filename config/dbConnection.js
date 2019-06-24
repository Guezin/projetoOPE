var mysql = require('mysql');

var connMysql= function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '110430',
        database: 'projetoope'
    });

}

module.exports = function(){
    return connMysql;
}