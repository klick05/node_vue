var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produtSchema = new Schema({
  'productId': {type: String},
  'productName': String,
  'salePrice': Number,
  'productNum': Number,
  'productImage': String,
  'productUrl': String
})

module.exports = mongoose.model('goods', produtSchema)
