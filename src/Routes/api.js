const express = require('express');
const router = express.Router();

// Importing controller functions
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

// Blog Controller Routes
router.get('/blogController/create', blogController.create);
router.get('/blogController/read', blogController.read);
router.get('/blogController/update', blogController.update);
router.get('/blogController/delete', blogController.delete);

// Blog Details Controller Routes
router.get('/blogDetailsController/create', blogDetailsController.create);
router.get('/blogDetailsController/read', blogDetailsController.read);
router.get('/blogDetailsController/update', blogDetailsController.update);
router.get('/blogDetailsController/delete', blogDetailsController.delete);

// Comment Controller Routes
router.get('/commentController/create', commentController.create);
router.get('/commentController/read', commentController.read);
router.get('/commentController/update', commentController.update);
router.get('/commentController/delete', commentController.delete);

// Message Controller Routes
router.get('/messageController/create', messageController.create);
router.get('/messageController/read', messageController.read);
router.get('/messageController/update', messageController.update);
router.get('/messageController/delete', messageController.delete);

// Portfolio Controller Routes
router.get('/portfolioController/create', portfolioController.create);
router.get('/portfolioController/read', portfolioController.read);
router.get('/portfolioController/update', portfolioController.update);
router.get('/portfolioController/delete', portfolioController.delete);

// Product Controller Routes
router.get('/productController/create', productController.create);
router.get('/productController/read', productController.read);
router.get('/productController/update', productController.update);
router.get('/productController/delete', productController.delete);

// Profit Controller Routes
router.get('/profitController/create', profitController.create);
router.get('/profitController/read', profitController.read);
router.get('/profitController/update', profitController.update);
router.get('/profitController/delete', profitController.delete);

// Project Controller Routes
router.get('/projectController/create', projectController.create);
router.get('/projectController/read', projectController.read);
router.get('/projectController/update', projectController.update);
router.get('/projectController/delete', projectController.delete);

// Service Controller Routes
router.get('/serviceController/create', serviceController.create);
router.get('/serviceController/read', serviceController.read);
router.get('/serviceController/update', serviceController.update);
router.get('/serviceController/delete', serviceController.delete);

// Title Controller Routes
router.get('/titleController/create', titleController.create);
router.get('/titleController/read', titleController.read);
router.get('/titleController/update', titleController.update);
router.get('/titleController/delete', titleController.delete);

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

module.exports = router;
