var express = require('express')
var router = express.Router()
const {
  getlist,
  addlistItem,
  getlistById,
  updateItem,
  deleteItem,
  searchItem,
  getItemByPage,
  getItemComment
} = require('../middleware/article')

router.get('/', getlist, (req, res, next) => {
  const { data } = req
  res.json({ data })
})

router.post('/add', [addlistItem], (req, res, next) => {
  const { data } = req
  res.json({ data })
})

router.get('/list', getlistById, (req, res, next) => {
  const { data } = req
  res.json({ data })
})

router.post('/update', updateItem, (req, res, next) => {
  const { data } = req
  res.json({ data })
})

router.post('/delete', deleteItem, (req, res, next) => {
  const { data } = req
  res.json({ data })
})

router.post('/search', searchItem, (req, res, next) => {
  const { data } = req
  res.json({ data })
})

router.post('/listpage', getItemByPage, (req, res, next) => {
  const { data } = req
  res.json({ data })
})


router.post('/itemComment', getItemComment, (req, res, next) => {
  const { data } = req
  res.json({ data })
})
module.exports = router
