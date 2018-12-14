const router = require('express').Router();

// router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not found');
  error.stats = 404;
  next(error);
});

module.exports = router;
