// External dependencies
const express = require('express');
const router = express.Router();

// Clear all session data
router.get('/clear', (req, res) => {
	req.session.data = {}
	res.redirect('/index')
})

// Add your routes here - above the module.exports line

module.exports = router;