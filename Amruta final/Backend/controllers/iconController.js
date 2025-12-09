const iconModel = require('../models/iconModel');

async function listIcons(req, res, next) {
  try {
    const icons = await iconModel.listIcons();
    res.json({ success:true, data: icons });
  } catch (err) { next(err); }
}

async function uploadIcon(req, res, next) {
  try {
    // multer puts file in req.file
    if (!req.file) return res.status(400).json({ success:false, message:'No file' });
    const filename = req.file.filename;
    const display_name = req.body.displayName || null;
    const uploaded_by = req.user.id;
    const icon = await iconModel.createIcon(filename, display_name, uploaded_by);
    res.status(201).json({ success:true, data: icon });
  } catch (err) { next(err); }
}

module.exports = { listIcons, uploadIcon };
