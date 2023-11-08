const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("E-mail is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: (value) => {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain the word 'password'");
      }
      if (value.length <= 7) {
        throw new Error(
          `Password cannot be of ${value.length} characters. It has to be atleast 8 characters long.`
        );
      }
    },
  },
});

const User = mongoose.model("User", userSchema);
// const User = mongoose.model("User", userSchema, "User");         // this way the collection name would not be auto-pluralled
module.exports = User;
