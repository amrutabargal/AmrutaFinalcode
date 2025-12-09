// Backend/routes/iconRoutes.js
const express = require('express');
const router = express.Router();
const iconCtrl = require('../controllers/iconController');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// simple disk storage - adjust path where you store uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) { cb(null, 'uploads/icons'); },
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-' + Math.round(Math.random()*1e9) + ext);
  }
});
const upload = multer({ storage });

router.get('/', iconCtrl.listIcons);               // GET /api/nexus/icons
router.post('/upload', auth, upload.single('icon'), iconCtrl.uploadIcon); // POST /api/nexus/icons/upload

module.exports = router;
