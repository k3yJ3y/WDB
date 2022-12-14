const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO ERROR");
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// const makeTweets = async () => {
//   //   const user = new User({ username: "chickenFan99", age: 33 });
//   const user = await User.findOne({ username: "chickenFan99" });
//   const tweet2 = new Tweet({ text: "*chicken noises", likes: 1045 });
//   tweet2.user = user;
//   user.save();
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  const tweet = await Tweet.find({}).populate('user');
  console.log(tweet);
};

findTweet();
