const express = require('express');
const router = express.Router();
const nexusCtrl = require('../controllers/nexusController');
const auth = require('../middleware/auth'); // your JWT middleware

router.post('/', auth, nexusCtrl.createNexus);       // POST /api/nexus
router.get('/my', auth, nexusCtrl.getMyNexus);       // GET /api/nexus/my
router.get('/public', nexusCtrl.getPublicNexus);     // GET /api/nexus/public
router.get('/:id', auth, nexusCtrl.getNexusById);    // GET /api/nexus/:id
router.put('/:id', auth, nexusCtrl.updateNexus);     // PUT /api/nexus/:id
router.delete('/:id', auth, nexusCtrl.deleteNexus);  // DELETE /api/nexus/:id

module.exports = router;
