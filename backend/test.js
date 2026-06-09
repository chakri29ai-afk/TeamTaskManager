const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://chakri29ai_db_user:80mfuDjt7hJJAsk3@cluster0.tjynely.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("CONNECTED");
})
.catch((err) => {
  console.log("ERROR:", err);
});