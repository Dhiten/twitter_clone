//clone twitter
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/user.route.js";

export function startServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());
  //parrsing data from http
  app.use(bodyParser.urlencoded({ extended: true }));
  //Buffer.from(data, 'base64')
  const pass=Buffer.from('c295dW5hYmFzZWRlcHJ1ZWJhcw==', 'base64').toString('ascii');
  const user=Buffer.from('ZGhpdGhlbg==', 'base64').toString('ascii'); 
  const uril= Buffer.from('QGNsdXN0ZXIwLm9sN2Q2dGwubW9uZ29kYi5uZXQ=', 'base64').toString('ascii');
  const uri = `mongodb+srv://${user}:${pass}${uril}/Twutter?retryWrites=true&w=majority`;
  mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
  app.use("/users", userRoutes);


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  

}
startServer();