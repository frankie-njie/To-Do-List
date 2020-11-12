const express = require('express');
const bodyParser = require('body-parser');

let items = ["Buy Food","Cook Food","Eat Food"];

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let today = new Date();
  let currentDate = today.getDay();

  //Selecting the particular day of the week
  // switch (currentDate) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  // }

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-UK", option);

  res.render("list", {kindOfDay: day, newListItems: items });
});

app.post("/", function(req, res){
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
})
