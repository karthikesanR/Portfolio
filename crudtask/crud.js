const express = require("express");

var mysql = require("mysql");
var cors=require('cors')

app = express();

app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "crudapp",
});

connection.connect();


// GET FUNCTION


app.get("/getall", (req, res) => {
  connection.query(
    "SELECT id,username,email,message from crud",
    function (error, results) {
      if (error) {
        console.log(error);
      }
      console.log("The solution is: ", results);
      res.end(JSON.stringify(results));
    }
  );
});
// POST FUNCTION

app.post("/insert", (req, res) => {
  connection.query(
    `insert into crud (username,email,message) values ('${req.body.username}','${req.body.email}','${req.body.message}')`,
    function (error, results) {
      if (error) {
        console.log(error);
      }

      console.log(results);

      res.json(results);

    //   res.end(JSON.stringify(results));
    }
  );
});

// app.post('/insert', (req, res) => {

//     connection.query('insert into contact (username,email,message) values (?,?,?)',[req.body.username,req.body.email,req.body.message], function (error, results) {

//         if (error) {

//             console.log(error);

//         }

//         console.log(results);

//         res.json(results)

//         // res.end(JSON.stringify(results))

//     });

// })

// PUT FUNCTION

app.put("/update", (req, res) => {
  connection.query(
    `UPDATE crud SET  username=?,email=?,message=? where id=?`,
    [req.body.username,req.body.email,req.body.message,req.body.id],
    function (error, results) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      res.json(results);
      // res.end(JSON.stringify(results))
    }
  );
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
