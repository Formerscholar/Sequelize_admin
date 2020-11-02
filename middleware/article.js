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

    next()
  },
  async getItemByPage(req, res, next) {
    try {
      let { page = 1 } = req.body
      ~~page < 1 ? 1 : ~~page

      const data = await db.Article.findAll({
        order: [['id', 'DESC']],
        offset: (page - 1) * 2,
        limit: 2,
      })
      req.data = data
    } catch (error) {
      req.data = error
    }
    next()
  },
  async getItemComment(req, res, next) {
    let { id = 1 } = req.body
    try {
      const data = await db.Article.findOne({
        where: { id },
        include: [db.Comment],
        limit: 1,
      })
      req.data = data
    } catch (error) {
      req.data = error
    }
    next()
  },
}
