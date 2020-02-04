const mysql = require('../../services/dbConnection').pool
const bcrypt = require('bcryptjs')
const generateToken = require('../../utils/generateToken')

module.exports = {
  async login(req , res, next){
    
    const {email, senha} = req.body  
          
    mysql.getConnection( async (error, conn)=>{
      if(error) res.status(400).json({error})
      
        conn.query(
          `SELECT email, password FROM usuario WHERE email = ?`,
          [email],
          async (error, resultado, field)=>{
            if(error) res.status(400).json({error})

            if(!resultado[0])
              res.status(400).json({message: "Não há usuario com esse email"})
            
  
            await bcrypt.compare(senha, resultado[0].password, (error, result)=>{
            
            if(error)return res.status(400).json({error})

            resultado[0].password = undefined

            const Token = generateToken({id: resultado[0].id_usuario})
            
            if(result){
              return res.status(200).send({message: 'Usuario Logado com Sucesso',token: Token})
                } else {
                    return res.status(400).send({messageS: 'Essa senha esta Errada'})
                }
           })
    
          }
        )
    })  
  },
}