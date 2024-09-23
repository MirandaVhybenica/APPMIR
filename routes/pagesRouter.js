
const express = require('express');
const router = express.Router();
const VVMController = require('../controllers/VVM_CONTROLLER');

router.get('/', VVMController.getHomePage);
router.get('/about', VVMController.getAboutPage);
router.get('/favorites', VVMController.getFavoritesPage);
router.get('/hobby', VVMController.getHobbyPage);
router.get('/contact', VVMController.getContactPage);

module.exports = router;
