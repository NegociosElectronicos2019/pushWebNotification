var express = require("express");
var Request = require("request");
var router = express.Router();



/* Variables para Fuel SDK */
const ET_Client = require('sfmc-fuelsdk-node');
const clientId = '6pc5gwpvanownyydmztsk9vk';
const clientSecret = 'XqHSQZCdqvSVKV9p6wzdr6tH';
const stack = 789;
const client = new ET_Client(clientId, clientSecret, stack);


/*Variables para consumir Pushpushgo Service*/

var host ="api.pushpushgo.com";
var path ="/project/5dca2b7a8d7dda6c7e30a6c5/send/push";
var state ="ready";
var tags = ["pe","chrome","android","mobile","windows","desktop","samsung browser"];
var body ="";
var title ="";
var icons = "";
var image = "";
var redirectLink = "";
/* ----- */


/* ----- */
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/form", function(req, res, next) {
  res.render('form', {});
});

router.post('/form',function(req,res,next){
  const deRow = client.dataExtensionRow({
    Name: 'E301CEDB-B073-448B-B34A-0BA2754D271D',
    props: ['Nombres'],
    filter: {}
    // to return all rows, delete the filter property
  });
  
  deRow.get((err, res) => {
    if (err) {
      console.error(err.message);
    } else {
      for (const result of res.body.Results) {
        for (const property of result.Properties.Property) {
          console.log(property);
        }
      }
    }
  });
 /* Request.post({
    "headers": { "content-type": "application/json",
                  "X-Token": "771f8f4c-549f-40e3-ac6d-64e8be54d97a" },
    "url": "https://api.pushpushgo.com/project/5dca2b7a8d7dda6c7e30a6c5/send/push",
    "body": JSON.stringify(
      {
        "state": "ready",
        "tags":["pe","chrome","android","mobile","windows","desktop","samsung browser"],
        "message":{
          "body": req.body.bodyNotification,
          "title": req.body.titleNotification,
          "icons":"https://image.flaticon.com/icons/png/512/450/450016.png",
          "image":"https://image.flaticon.com/icons/png/512/450/450016.png",
          "redirectLink":"https://gutynatura.herokuapp.com"
        }
      }
    )
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});*/
res.render('form', {});

});
module.exports = router;
