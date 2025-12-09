// Backend/controllers/nexusController.js
const nexusModel = require('../models/nexusModel');

async function createNexus(req, res, next) {
  try {
    const { name, type, icon, description, is_public } = req.body;
    const createdBy = req.user.id; // from auth middleware
    const nexus = await nexusModel.createNexus({ name, type, icon, description, created_by: createdBy, is_public });
    // add creator as owner
    await nexusModel.addMember(nexus.id, createdBy, 'owner');
    res.status(201).json({ success: true, data: nexus });
  } catch (err) { next(err); }
}

async function getMyNexus(req, res, next) {
  try {
    const userId = req.user.id;
    const list = await nexusModel.getMyNexus(userId);
    res.json({ success: true, data: list });
  } catch (err) { next(err); }
}

async function getPublicNexus(req, res, next) {
  try {
    const list = await nexusModel.getPublicNexus();
    res.json({ success: true, data: list });
  } catch (err) { next(err); }
}

async function getNexusById(req, res, next) {
  try {
    const { id } = req.params;
    const nexus = await nexusModel.getNexusById(id);
    if (!nexus) return res.status(404).json({ success:false, message:'Nexus not found' });
    res.json({ success:true, data: nexus });
  } catch (err) { next(err); }
}

async function updateNexus(req, res, next) {
  try {
    const { id } = req.params;
    // authorization: ensure user is owner or has permission — minimal check placeholder
    const fields = req.body;
    const updated = await nexusModel.updateNexus(id, fields);
    res.json({ success:true, data: updated });
  } catch (err) { next(err); }
}

async function deleteNexus(req, res, next) {
  try {
    const { id } = req.params;
    await nexusModel.deleteNexus(id);
    res.json({ success:true, message:'Deleted' });
  } catch (err) { next(err); }
}

module.exports = {
  createNexus, getMyNexus, getPublicNexus, getNexusById, updateNexus, deleteNexus
};
