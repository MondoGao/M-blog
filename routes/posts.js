let express = require('express');
let router = express.Router();

let checkLogin = require('../middlewares/check').checkLogin;
router.get('/', function (req, res, next) {
  res.send(req.flash());
});

router.post('/', checkLogin, function (req, res, next) {
  res.send(req.flash());
});

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;