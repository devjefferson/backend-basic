const mongoose = require('mongoose')


const ProdutoSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  usuario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    require: true
  },
  modelo:{
    type: String,
    required: true
  },
  valor_compra:{
    type: Number,
    required: true
  },
  valor_venda:{
    type: Number,
    required: true
  },
  estoque:{
    type: String,
    required: true
  },  
  fabricante:{
    type: String,
    required: true
  },
  creater_at:{
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model('produtos', ProdutoSchema)