var cors = require('cors');
var logger = require('morgan');
const unirest = require ('unirest')
const cheerio = require ('cheerio')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');


var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/hello', (req, res) => {
  res.send('Great! I am the greatest')
})

app.get('/great', (req, res) => {
  res.send('Great! Success at last')
})

app.get('/usersLocation', async function (req, res) {
  const axios = require("axios");
  
  const options = {
    method: 'GET',
  
  //   params: {url: 'http://www.bbc.co.uk'},
  //   headers: {
  //     // 'X-RapidAPI-Key': '321abdfc93msh110058fec28805bp1c6121jsned9d068b37e8',
  //     // 'X-RapidAPI-Host': 'site-scrapper.p.rapidapi.com'
  // }
  }
  res.json(usersLocation)
  });
  


  //app.post('/checkname', function (req, res) {
  //   if (req.body.name.toLowerCase() === 'homer') {
  //     res.status(401).send({ message: "Sorry, no Homers!" });
  //   } else {
  //     res.send({
  //       passed: true,
  //       message: 'Welcome, friend!',
        
  //     });
  //   }
  // })
  
  
  // app.get('/checkname/:name', function (req, res) {
  //   if (req.params.name.toLowerCase() === 'homer') {
  //     res.status(401).send(req.params.name);
  //   } else {
  //     res.json(req.params.name);
  //   }
  // });
  //////////////////////////////////////////////////////////////////
  app.post('/checkname', function (req, res) {
    if (req.body.name.toLowerCase() === 'homer') {
      res.status(401).send({ message: "Sorry, no Homers!" });
    } else {
      res.send({
        passed: true,
        message: 'Welcome, friend!',
        
      });
    }
  })
  
  
  // app.get('/checkname/:name', function (req, res) {
  //   if (req.params.name.toLowerCase() === 'homer') {
  //     res.status(401).send(req.params.name);
  //   } else {
  //     res.json(req.params.name);
  //   }
  // });
  

  app.get('/checkname/:name', function (req, res) {
   
      // res.json(req.params.name);
   
  // });

//get user location address from here as res.params.name.
//create a list of words from the address
//loop throug and the list and write it that any addresskeyword is any word from the list aside figures
// let user_location=addresskeyword

let rawaddress = [req.params.name]
let addresskeywords = rawaddress.split(" ");
alert(addresskeywords)

//loop through the keywords 


let list = [addresskeywords];
for (let i = list.length - 1; i >= 0; i--) {
  if (typeof list[i] === "number") {
    list.splice(i, 1);
  }
}

for (let i = 0; i < list.length; i++) {
  alert(list[i]);



  let user_location1= list[i]
  // let user_location1= req.params.name
  // let user_location1= "adeolaodeku"
  const getOrganicData = () => {
    let user_location=user_location1;//the users location details is received from here
    let userspecific = ("crime"+user_location);
    let weblink=("https://www.google.com/search?q="+userspecific+"&gl=us&hl=en");
    return unirest
      // .get("https://www.google.com/search?q=lagosadeolaodekucrimeinsecurityadeola-odeku&gl=us&hl=en")
      .get(weblink)
      .headers({
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
      })
      .then((response) => {
        let $ = cheerio.load(response.body);
  
        let titles = [];
        let links = [];
        let snippets = [];
        let displayedLinks = [];
  
        $(".yuRUbf > a > h3").each((i, el) => {
          titles[i] = $(el).text();
        });
        $(".yuRUbf > a").each((i, el) => {
          links[i] = $(el).attr("href");
        });
        $(".g .VwiC3b ").each((i, el) => {
          snippets[i] = $(el).text();
        });
        $(".g .yuRUbf .NJjxre .tjvcx").each((i, el) => {
          displayedLinks[i] = $(el).text();
        });
  
        const organicResults = [];
  
        for (let i = 0; i < titles.length; i++) {
          organicResults[i] = {
            title: titles[i],
            links: links[i],
            snippet: snippets[i],
            displayedLink: displayedLinks[i],
          };
        }
        res.send(organicResults)
      
      });
  };
  
  getOrganicData();
  }} );

app.get('/check_name', function (req, res) {
  if (req.params.name.toLowerCase() === 'homer') {
    res.status(401).send({ message: "Sorry, no Homer's!" });
  } else {
    res.json('Welcome!',req.params.name);
  }
});

  //view
  app.post('/view', async function (req, res) {
    try {
      await client.connect();
      const database = client.db('olukayode_sage');
      const kaydata = database.collection('olukayode_collection');
  
      const findResult3 = await kaydata.find({}).toArray();
      console.log('Found documents =>', findResult);
  
      //This query returns all the documents in the documents collection. If you add this below the insertMany example you'll see the document's you've inserted.
      console.log("Entry displayed successfully");
    } finally {
      await client.close();
    }
  });


  app.get('testing', function (req, res) {
   let a = 2
   let b =3
   c=a*b
    console.log(c)
    }
  );
 

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

  


















// var cors = require('cors');

// var methodOverride = require('method-override');

// const alerts = require('google-alerts-api');
// const { HOW_OFTEN, DELIVER_TO, HOW_MANY, SOURCE_TYPE } = alerts;
// const cheerio = require("cheerio");
// const { S3Client } = require
// const aws = require("aws-sdk");
// var multer = require("multer");
// var multerS3 = require("multer-s3-v2");
// const fs = require('file-system');
// const ObjectId = require('mongodb').ObjectId;
// var google = require('google')
// const rp = require('request-promise');

// const { mongoClient, MongoClient } = require('mongodb')
// const mongoose = require('mongoose');
// const unirest = require("unirest")

// var http = require('http');
// var path = require("path");

// var helmet = require('helmet');
// var rateLimit = require("express-rate-limit");
// // const { truncate } = require('fs');
// // var router = express.Router();
// // const app = express(); // Create an ExpressJS app
// // const nodemon = require('Nodemon'); // Create an ExpressJS app
// // const bodyParser = require('body-parser'); // Middleware
// const axios = require('axios');

// // app.use(bodyParser.urlencoded({ extended: false }));
// var path =require('path')


// // var server = http.createServer(app);


// ///////////////////////////////////////////////

// let port=process.env.PORT||7000

// app.use(express.static(__dirname + '/public'));

// app.get('/index.html', function(req, res, next) {
//     res.sendFile(path.join(__dirname + 'public/index.html'));
// });

// /////////////////////////////////////////////////////////

// const s3 = new aws.S3({
//   accessKeyId: "AKIAVBYTAVV7RFPLPENC",
//   secretAccessKey: "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",
//   region: "us-west-2"
// })

// //const upload = multer({
// const uploadS3 = () =>
//   multer({
//     storage: multerS3({
//       s3,
//       //acl: 'public-read',
//       bucket: 'profile-picture-upload-youtube1',

//       key: function (req, file, cb) {
//         //key: (req, file, cb) => {
//         cb(null, Date.now().toString() + '-' + file.originalname);
//       },
//     })
//   })


// // const uri = 'mongodb+srv://OlukayodeUser:Kayode4371@cluster0.1ejsr.mongodb.net/olukayode_sage?retryWrites=true&w=majority'
// // const client = new MongoClient(uri);
// // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// // app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(helmet());
// app.use(cors());

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(methodOverride());

// app.get('/scrape5', async function (req, res) {
// request = request.defaults({jar: true});

// var options = {
//     url: 'http://www.google.com/ncr',
//     headers: {
//         'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16'
//     }
// };

// request(options, function () {

//     request('https://www.google.com/search?gws_rd=ssl&site=&source=hp&q=google&oq=google', function (error, response, body) {

//         var $ = cheerio.load(body);

//         $("li").each(function() {
//             var link = $(this);
//             var text = link.text();

//             console.log(text);
//         });
//     });
// });
// });
//  app.post('/data', (req, res) => {
//   console.log(req.body.data);
//    res.send(req.body)
  
//  });
//  /////////////////////////////////////////////////////////////////
//  app.get('/data', (req, res) => {
  
  
//  });
