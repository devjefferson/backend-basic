const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password:{
    type: String,
    required: true
  },
  createAt:{
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password, 10)

  next()
})

module.exports = mongoose.model('users', UserSchema)