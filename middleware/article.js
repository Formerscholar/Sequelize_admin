const db = require('../models')
const Op = db.Sequelize.Op

module.exports = {
  async getlist(req, res, next) {
    try {
      const data = await db.Article.findAll({
        order: [['id', 'DESC']],
      })
      req.data = data
      next()
    } catch (error) {
      next(error)
    }
  },
  async addlistItem(req, res, next) {
    const { title, brief, content } = req.body
    try {
      const data = await db.Article.create({
        title,
        brief,
        content,
      })
      req.data = data
      next()
    } catch (error) {
      next(error)
    }
  },
  async getlistById(req, res, next) {
    const { id } = req.query
    try {
      const data = await db.Article.findByPk(id)
      req.data = data
      next()
    } catch (error) {
      next(error)
    }
  },
  async updateItem(req, res, next) {
    const { id, title, content, category_id, hot, brief } = req.body
    try {
      const data = await db.Article.findByPk(id)
      data.update({ title, content, category_id, hot, brief })
      req.data = data
      next()
    } catch (error) {
      next(error)
    }
  },
  async deleteItem(req, res, next) {
    const { id } = req.body
    try {
      const data = await db.Article.findByPk(id)
      data.destroy()
      req.data = data
      next()
    } catch (error) {
      next(error)
    }
  },
  async searchItem(req, res, next) {
    let where = {}
    const { title } = req.body
    if (title) {
      where.title = {
        [Op.like]: `%${title}%`,
      }
    }
    const data = await db.Article.findAll({
      order: [['id', 'DESC']],
      where,
    })
    res.json({ data })
  },
}
