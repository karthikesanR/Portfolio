const express = require("express");

var mysql = require("mysql");
var cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); //token
var { expressjwt: jwtverify } = require("express-jwt");
const { error, Console } = require("console");

const nodemailer = require("nodemailer"); //mail

const { resolve } = require("path");

app = express();

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e352a73c09ae64",
    pass: "3a13298f746918",
  },
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@123",
  database: "registerModule",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/insert", async (req, res) => {
  let data = req.body;
  var salt = 10;

  var token = jwt.sign({ email: data.email }, "secret");
  console.log("token", token);
  bcrypt.hash(req.body.password, salt, function (err, hash) {
    console.log(hash, "hashh ");

    connection.query(
      "insert into userTable (email, passwords, userName, address,isVerfied,stateId, cityId) values(?,?,?,?,?,?,?)",

      [
        req.body.email,
        hash,
        req.body.name,
        req.body.address,
        0,
        req.body.state,
        req.body.city,
      ],

      function (error, results) {
        if (error) {
          console.log("error", error);
        }

        console.log("created sucessfully", results);

        sendMail(req.body.email, token);

        res.status(200).json({ message: "mail send sucessfully" });
      }
    );
  });
});

function sendMail(mailId, token) {
  console.log("DDDDDDDDDDDDDDDD", mailId, token);

  // return new Promise((resolve, reject) => {
  //   var transport = nodemailer.createTransport({
  //     host: "sandbox.smtp.mailtrap.io",
  //     port: 2525,
  //     auth: {
  //       user: "e352a73c09ae64",
  //       pass: "3a13298f746918",
  //     },
  //   });

    var mailOptions = {
      from: "admin@gmail.com",
      to: mailId,
      subject: "plz verify ur mail",
      text: "To verify your account",
      html:
        '<html><body><p>To verify your account</p><a href="http://localhost:4200/login?token=' +
        token +
        '">Click Here</a></body></html>',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Toke error", error);
      } else {
        console.log("success");
        resolve(true);
      }
    });
  }

app.post("/checkUser", (req, res) => {
  connection.query(
    "SELECT * FROM userTable WHERE email=?",
    [req.body.email],
    function (error, results) {
      if (error) {
        console.log("error", error);
        res.status(500).json({ error: "Failed to retrieve data" });
        return;
      }
    }
  );
});
app.put("/validateToken", (req, res) => {
  try {
    console.log(req.body.token, "verify token");

    let token = req.body.token;

    const verified = jwt.verify(token, "secret");

    if (verified) {
      console.log("verified", verified);

      connection.query(
        "update userTable set isVerfied=1 where email=?",
        [verified.email],
        function (error, results) {
          if (error) {
            console.log(error);
          } else {
            console.log(results);

            res.json("Verified  Successfully");
          }
        }
      );
    } else {
      // Access Denied

      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied

    return res.status(401).send(error);
  }
});
// LOGIN

app.post("/login", function (req, res) {
  const { email, passwords } = req.body;
  console.log(req.body, "req.body");
  console.log(email);
  connection.query(
    "SELECT * FROM userTable WHERE email = ?",
    [email],
    function (error, loginresults) {
      if (error) {
        console.log(error);
      } else {
        if (loginresults.length > 0) {
          if (bcrypt.compareSync(passwords, loginresults[0].passwords)) {
            if (loginresults[0].isVerfied == 1) {
              // res.json("Login successfull");

              res.json(loginresults);

              // let gebyid='select * from users where id=?';
            } else {
              res.json("Please verify your email");
            }
          } else {
            res.json("Incorrect password");
          }
        } else {
          res.json("Incorrect email");
        }
      }

      console.log(loginresults);
    }
  );
});

// forgot password
app.post("/forgotpassword", function (req, res) {
  const { email} = req.body;

  connection.query(
    "select * from userTable where email=?",
    [email],
    function (error, verifyresults) {
      if (error) {
        console.log(error);
      } else {
        if (verifyresults.length > 0) {
          if (verifyresults[0].isVerfied === 1) {
            const payload3 = {
              id: verifyresults.id,
            };

            console.log(verifyresults);

            const token = jwt.sign(payload3, "secret");
           console.log(token);
            // if(results[0].isverified==0){

            forgotPassword(token);
          }
        } else {
          res.json("invalid credentials");
        }
      }
    }
  );
});

function forgotPassword(token) {

 
let email = {
    from: "admin@gmail.com",

    to: "admin@gmail.com",

    subject: "sending!!!",

    text: "hii bro,call me",

    html:
      "<a href='http://localhost:4200/change/" +
      token +
      "'>Click here to verify</a>",
  };

  transporter.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info.response);
    }
  });
}

// change password

app.post("/changepassword", function (req, res) {
  const token = req.body.token;

  const {email,passwords} = req.body;

  const hash = bcrypt.genSaltSync(10);

  connection.query(
    "select * from userTable where email=?",
    [email],
    function (errr, result) {
      if (errr) {
        console.log(errr);
      } else {
        if (result.length > 0) {
          jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
              console.log(err);

              return res.status(422).json({ message: "Invalid token" });
            }

            // const id = decoded.id;

            // console.log(id);

            console.log(email);

            let update = "UPDATE userTable SET passwords = ? WHERE email = ?";

            connection.query(
              update,
              [bcrypt.hashSync(passwords, hash), email],
              function (error, results) {
                if (error) {
                  console.log(error);

                  return res
                    .status(422)
                    .json({ message: "Unable to verify token" });
                } else {
                  console.log(results);

                  res.status(200).json({ message: "Verified successfully" });
                }
              }
            );
          });
        }
      }
    }
  );
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
