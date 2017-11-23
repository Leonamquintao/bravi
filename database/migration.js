var mysql = require('mysql')
require('dotenv').config()

var migrate = (() => {

  let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  })

  let db = false
  let verify = "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '"+ process.env.DB_NAME +"'"

  connection.query(verify, (error, result) => {
    if(result != undefined) {
      if(result.length > 0) { db = true }
    }
  })

  connection.query('CREATE DATABASE IF NOT EXISTS `'+ process.env.DB_NAME +'`', (error, result) => {
    if(error) {
      console.log('Erro na criação do banco! ', error)
    } else {
      msg = 'Banco já existe...iniciando a criação das tabelas!'
      if(db == false) { msg = 'Banco criado com sucesso!' }
      console.log( '\n' + msg +'\n')
    }
  })

  connection.query('USE `'+ process.env.DB_NAME +'`')

  const createContactsTable = `CREATE TABLE IF NOT EXISTS contacts (
    id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) DEFAULT NULL,
    gender varchar(10) DEFAULT NULL,
    age varchar(10) DEFAULT NULL,
    phone varchar(20) DEFAULT NULL,
    whatsapp varchar(20) DEFAULT NULL,
    created_at timestamp NULL DEFAULT NULL,
    updated_at timestamp NULL DEFAULT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;`

  connection.query(createContactsTable, (error, result) => {
    if(error) {
      console.log('Erro na criação da tabela! ', error);
    } else {
      console.log('Tabela "Contacts" criada com sucesso!');
    }
  })

  connection.end()
})

migrate()
