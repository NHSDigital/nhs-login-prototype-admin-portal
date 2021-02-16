// External dependencies
const express = require('express');
const router = express.Router();

// Clear all session data
router.get('/clear', (req, res) => {
	req.session.data = {}
	res.redirect('/index')
})

// Add your routes here - above the module.exports line

router.get('/error', (req, res) => {
	var errormessage = req.param('errormessage')
	res.render('error', {errormessage: errormessage},function(err,html){res.send(html)})
}) 

module.exports = router;