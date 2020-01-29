const mongoose = require('mongoose')
const AutoInc = require('../utils/AutoInc')


const PedidoSchema = new mongoose.Schema({
  clente:{
    type: String
  },  
  usuario:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    require: true
  },
    produtos:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produtos',
        require: true
      }
    ],
    creater_at:{
      type: Date,
      default: Date.now
    }

})

PedidoSchema.plugin(AutoInc.Plugin, AutoInc.Increment('pedidos', 'cod_pedido'));

module.exports = mongoose.model('pedidos', PedidoSchema)