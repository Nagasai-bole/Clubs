const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const collegeSchema = new Schema({
  college: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  collegeLogo: {
    url: String,
    filename: String,
  },
  clubs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Club", // Ensure the reference matches the actual model name
    },
  ],
  role: {
    type: String,
    required: true,
  },
});

collegeSchema.plugin(passportLocalMongoose, { usernameField: "college" });

module.exports = mongoose.model("College", collegeSchema);
