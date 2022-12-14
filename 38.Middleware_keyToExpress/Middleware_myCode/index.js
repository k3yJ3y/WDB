const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love DOGS");
  next();
});

// app.use((req, res, next) => {
//   // if(req.path === '/secret'){}

//   const { password } = req.query;
//   if (password === "chickennugget") {
//     next();
//   }
//   res.send("Sorry u need a password!!!");
//   //   http://localhost:3000/dogs?password=chickennugget
// });

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("Sorry u need a password!!!");
  //   http://localhost:3000/dogs?password=chickennugget
};

// app.use((req, res, next) => {
//   console.log("MY FIRST MIDDLEWARE!!!");
//   return next();
// });
// app.use((req, res, next) => {
//   console.log("MY SECOND MIDDLEWARE!!!");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("HOME PAGE");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("WOOF WOOF!!");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send(
    "MY SECRET IS: Sometimes I wear headphones in public so I don't have to talk to anyone."
  );
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!!");
});

app.listen(3000, () => {
  console.log("App is listening on localhost:3000");
});
