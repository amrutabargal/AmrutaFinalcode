const pool = require('../config/db');

async function generateInvite(nexusId, code, invitedBy, expiresAt=null) {
  const q = `INSERT INTO invites (nexus_id, code, invited_by, expires_at) VALUES ($1,$2,$3,$4) RETURNING *`;
  const { rows } = await pool.query(q, [nexusId, code, invitedBy, expiresAt]);
  return rows[0];
}

async function getInviteByCode(code) {
  const { rows } = await pool.query('SELECT * FROM invites WHERE code=$1', [code]);
  return rows[0];
}

async function acceptInvite(code, userId) {
  const q = `UPDATE invites SET accepted_by=$1, is_used=true WHERE code=$2 RETURNING *`;
  const { rows } = await pool.query(q, [userId, code]);
  return rows[0];
}

module.exports = { generateInvite, getInviteByCode, acceptInvite };
