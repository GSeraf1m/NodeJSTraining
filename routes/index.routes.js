const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin.routes.js');
const shopRoutes = require('./shop.routes.js');

router.use('/admin', adminRoutes);
router.use('/shop', shopRoutes);

module.exports = router;