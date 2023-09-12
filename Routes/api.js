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
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/update', blogController.update);
router.get('/blog/delete', blogController.delete);

// Blog Details Controller Routes
router.get('/blog-details/create', blogDetailsController.create);
router.get('/blog-details/read', blogDetailsController.read);
router.get('/blog-details/update', blogDetailsController.update);
router.get('/blog-details/delete', blogDetailsController.delete);

// Comment Controller Routes
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/update', commentController.update);
router.get('/comment/delete', commentController.delete);

// Message Controller Routes
router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/update', messageController.update);
router.get('/message/delete', messageController.delete);

// Portfolio Controller Routes
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/update', portfolioController.update);
router.get('/portfolio/delete', portfolioController.delete);

// Product Controller Routes
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/update', productController.update);
router.get('/product/delete', productController.delete);

// Profit Controller Routes
router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/update', profitController.update);
router.get('/profit/delete', profitController.delete);

// Project Controller Routes
router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/update', projectController.update);
router.get('/project/delete', projectController.delete);

// Service Controller Routes
router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/update', serviceController.update);
router.get('/service/delete', serviceController.delete);

// Title Controller Routes
router.get('/title/create', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/update', titleController.update);
router.get('/title/delete', titleController.delete);

module.exports = router;
