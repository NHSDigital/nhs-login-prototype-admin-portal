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

// Dev Mode
function devModeRoute(req, res, next) {
	if (!req.session.data['devMode']) {
	  console.log('no data found');
	  var devMode = req.query.devMode;
	  if (devMode === 'true') {
		console.log('devmode detected');
		req.session.data['devMode'] = 'true'
		console.log('local storage updated');
	  } else {
		console.log('devmode not detected');
	  }
	} else {
	  console.log('data found and set to ' + req.session.data['devMode'])
	}
	next()
  }
  router.get("/*", devModeRoute);
  router.get("/", devModeRoute);

  // Clear all session data
router.get('/clear-data', (req, res) => {
	req.session.data = {}
	res.redirect('/#')
  })