const bcrypt = require('bcryptjs')
const generateToken = require('../../utils/generateToken')
const { sequelize } = require('../../services/dbConnection')
const User = require('../../models/User')

/*
  CRUD USER
*/
module.exports = {
  async list(req, res, next) {
    try {
      const user = await User.findAll()
      res.status(200).send({ user })
    } catch (error) {
      res.status(400).json({ mensagem: "Não a Usuario Cadastrado" })
    }
  },
  async store(req, res, next) {
    const { email } = req.body
    try {
      const Usuario = await User.findOne({
        where: { email: email }
      })

      if (Usuario) {
        res.status(401).json({ Error: `O email: ${email} já esta cadastrado` })
        return next()
      } 

      await User.create(req.body)
        res.status(201).json({
          mensagem: `Usuario cadastrado com Sucesso`
        })
      
      return next()
    } catch (error) {
      res.status(401).json({ error })
      next()
    }
  },
  async listone(req, res) {
    const { id } = req.params
    try {
      const Usuario = await User.findOne({
        where: { id }
      })

      if (!Usuario) {
        res.status(400).json({ mensagem: "Usuario Não Cadastrado" })
        return next()
      }

      Usuario.password = undefined

      res.status(200).json({ Usuario })

    } catch (error) {
      res.status(400).json({ error })
    }


  },
  async update(req, res, next) {
    const { id } = req.params
    try {
      if (!await User.findOne({ where: { id } })) {
        res.status(400).json({ error: "Não existe Nenhum Usuario com esse ID" })
        return next()
      }

      if (await User.findOne({ where: { email: req.body.email } })) {
        res.status(400).json({ error: "Esse Email Ja existe" })
        return next()
      }

      await User.update(req.body, { where: { id } })

      res.status(200).json({ msg: "Usuario Alterado" })
      return next()

    } catch (error) {
      res.status(400).json({ error })
    }

  },
  async delete(req, res) {
    const { id } = req.params
    try {
      if (!await User.findOne({ where: { id } })) {
        return res.status(400).json({ error: "Não existe Nenhum Usuario com esse ID" })
      }
      await User.destroy({ where: { id } })

      res.status(200).json({ messagem: "Usuario Deletado Com Sucesso" })
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}