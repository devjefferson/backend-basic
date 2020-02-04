const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')
module.exports = (req, res, next)=>{
  const authHeader = req.headers.authorization;

  if(!authHeader)
    return res.status(400).json({error: 'Token Não informado'})

    const parts = authHeader.split(' ')
  if(!parts.length === 2)
    return res.status(401).json({error: 'erro no Token'})

  const [schema, token] = parts

  if(!/^Bearer$/i.test(schema))
    return res.status(401).json({error: 'Token malformatado'})

  jwt.verify(token, authConfig.secret, (error, decoded)=>{
    if(error)
      return res.status(401).json({error: 'Token Invalido'})

    req.userId = decoded.id;
    return next()
  })
}