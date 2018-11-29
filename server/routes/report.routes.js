const Router = require('express').Router;

const router = new Router();

router.route('/')
  .post((req, res) => {
    res.json({test: 'test'})
  })

module.exports = router;