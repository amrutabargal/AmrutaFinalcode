const inviteModel = require('../models/inviteModel');
const nexusModel = require('../models/nexusModel');
const crypto = require('crypto');

function makeCode() {
  return crypto.randomBytes(12).toString('base64url'); // safe short token
}

async function generateInvite(req, res, next) {
  try {
    const { nexusId, expiresInHours } = req.body;
    // verify nexus exists and user has permission - minimal check
    const nexus = await nexusModel.getNexusById(nexusId);
    if (!nexus) return res.status(404).json({ success:false, message:'Nexus not found' });

    const code = makeCode();
    let expiresAt = null;
    if (expiresInHours) expiresAt = new Date(Date.now() + expiresInHours*3600*1000);
    const invite = await inviteModel.generateInvite(nexusId, code, req.user.id, expiresAt);
    res.status(201).json({ success:true, data: { code: invite.code, expiresAt: invite.expires_at } });
  } catch (err) { next(err); }
}

async function acceptInvite(req, res, next) {
  try {
    const { code } = req.body;
    const invite = await inviteModel.getInviteByCode(code);
    if (!invite) return res.status(404).json({ success:false, message:'Invite not found' });
    if (invite.is_used) return res.status(400).json({ success:false, message:'Invite already used' });
    if (invite.expires_at && new Date(invite.expires_at) < new Date()) return res.status(400).json({ success:false, message:'Invite expired' });

    // mark accepted
    const accepted = await inviteModel.acceptInvite(code, req.user.id);
    // add user to nexus members
    await nexusModel.addMember(invite.nexus_id, req.user.id, 'member');
    res.json({ success:true, message:'Invite accepted', data: accepted });
  } catch (err) { next(err); }
}

module.exports = { generateInvite, acceptInvite };
