var express = require('express');
var router = express.Router();
const { Pool } = require("pg");
const pool = new Pool({
    user: "web",
    host: "localhost",
    database: "test",
    password: "web",
    port: 5432
  });
  console.log("подключися к базе данных");  

router.get('/start', function(req, res, next){
    const sql = "SELECT * FROM Cats "
    pool.query(sql, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(result.rows[0].nickname);
      res.render("start", { cats: result.rows });
    });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
