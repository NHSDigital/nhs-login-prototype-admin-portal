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


 
// Run this code when a form is submitted to 'impact question'
router.post('/impact-level-answer', function (req, res) {
	// Make a variable and give it the value from 'enter name for the radio button'
	var impact = req.session.data['impact']
	 // Check whether the variable matches a condition
	if (impact == "Service is down"){
	  // Send user to 
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-down/is-it-planned')
	} else {
	  // Send user to 
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-not-working-properly/is-it-planned')
	}
   })

// Run this code when a form is submitted to 'maintenance question service down'
router.post('/is-it-planned-down', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned-down']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-down/planned-date-time')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-down/confirm-choices')
	}
   })  

// Run this code when a form is submitted to 'maintenance question - service not working properly'
router.post('/is-it-planned', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-not-working-properly/planned-date-time')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-not-working-properly/confirm-choices')
	}
   })	

// Run this code when a form is submitted to 'confirm choices service down'
router.post('/NAM-down-template', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned-down']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-down/Nam-down-planned-maintenance')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-down/Nam-down')
	}
   })  

// Run this code when a form is submitted to 'confirm choicesservice not working properly'
router.post('/NAM-template', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-not-working-properly/Nam-not-working-properly-planned-maintenance')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/service-not-working-properly/Nam-not-working-properly')
	}
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