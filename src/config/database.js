const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
module.exports = mongoose
  .connect(
    "mongodb+srv://davidiasdesousa:killer7@@cluster0-xqund.mongodb.net/coder?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected to DB"))
  .catch(err => console.log(err));
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' é maior que o limite máximo de '{MIN}'.";
mongoose.Error.messages.String.enum =
  "O '{PATH}' não é válido para o atributo '{PATH}'.";
