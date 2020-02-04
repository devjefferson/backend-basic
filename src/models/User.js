const {sequelize, Sequelize} = require('../services/dbConnection');
const bcrypt = require('bcryptjs')

const Usuario = sequelize.define('usuarios',{
  nome:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  data_nasc:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
},
{
  hooks:{
    beforeCreate: usuario =>{
      const salt = bcrypt.genSaltSync()
      usuario.set('password', bcrypt.hashSync(usuario.password, salt))
    }
  },
  classMethods:{
    isPassword:(encodedPassword, password)=> bcrypt.compareSync(password, encodedPassword)
  }
}
)

Usuario.pre

module.exports = Usuario