const pool = require('../config/db'); // adjust if you export differently

async function createNexus({ name, type, icon, description, created_by, is_public }) {
  const q = `INSERT INTO nexus (name, type, icon, description, created_by, is_public)
             VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
  const values = [name, type, icon, description, created_by, is_public ?? false];
  const { rows } = await pool.query(q, values);
  return rows[0];
}

async function getNexusById(id) {
  const { rows } = await pool.query('SELECT * FROM nexus WHERE id=$1', [id]);
  return rows[0];
}

async function getMyNexus(userId) {
  const q = `
    SELECT n.*
    FROM nexus n
    JOIN nexus_members m ON m.nexus_id = n.id
    WHERE m.user_id = $1
    ORDER BY n.created_at DESC
  `;
  const { rows } = await pool.query(q, [userId]);
  return rows;
}

async function getPublicNexus() {
  const { rows } = await pool.query('SELECT * FROM nexus WHERE is_public=true ORDER BY created_at DESC');
  return rows;
}

async function updateNexus(id, fields = {}) {
  // build set clause dynamically
  const keys = Object.keys(fields);
  if (!keys.length) return getNexusById(id);
  const set = keys.map((k, i) => `${k} = $${i+1}`).join(', ');
  const vals = keys.map(k => fields[k]);
  vals.push(id);
  const q = `UPDATE nexus SET ${set}, updated_at = now() WHERE id = $${vals.length} RETURNING *`;
  const { rows } = await pool.query(q, vals);
  return rows[0];
}

async function deleteNexus(id) {
  await pool.query('DELETE FROM nexus WHERE id=$1', [id]);
  return;
}

async function addMember(nexusId, userId, role='owner') {
  const q = `INSERT INTO nexus_members (nexus_id, user_id, role) VALUES ($1,$2,$3) RETURNING *`;
  const { rows } = await pool.query(q, [nexusId, userId, role]);
  return rows[0];
}

module.exports = {
  createNexus,
  getNexusById,
  getMyNexus,
  getPublicNexus,
  updateNexus,
  deleteNexus,
  addMember
};
