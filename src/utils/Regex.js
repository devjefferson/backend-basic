
module.exports = (params) => new RegExp([params].join(""), "i")

/*
 Segunda verção do meu codigo
module.exports = (params) =>{
    return { 
      $regex: new RegExp([params].join(""), "i")
    }
  }
  */

/*
Primeira Versão
module.exports =(params)=>{
  var regex = new RegExp([params].join(""), "i");
    var elemento = { $regex: regex }
    return elemento

}
*/

