const express = require('express');
const router = express.Router();
const { getItems, addItem, sendEnquiry } = require('../controllers/itemController');

router.get('/', getItems);
router.post('/', addItem);
router.post('/enquire', sendEnquiry);

module.exports = router;
