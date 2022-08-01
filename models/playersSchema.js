
const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jersey: {
    type: Number,
    require: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Players" , playerSchema)

// export default mongoose.model.Player || mongoose.model("player" , playerSchema)



