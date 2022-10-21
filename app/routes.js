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


// Run this code when a form is submitted to 'is it planned maintenance question service '
router.post('/is-it-planned', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/planned-maintenance')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/support-number')
	}
   })  

// Run this code when a form is submitted to 'is it planned maintenance question service '
router.post('/is-it-planned-change', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/planned-maintenance')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/incident-details')
	}
   })   

// Run this code when a form is submitted to 'is it planned maintenance question from edit'
router.post('/is-it-planned-edit', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/edit-user-alert/planned-maintenance')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/edit-user-alert/incident-details?change=true')
	}
   })   

// Run this code when a form is submitted to 'maintenance end date time question /service down'
router.post('/date-time', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['do-you-know-end-date-time']
	 // Check whether the variable matches a condition
	if (planned == "dontknow"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/support-number')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/planned-date-time')
	}
   })   
   
// Run this code when a form is submitted to 'maintenance end date time question /service down'
router.post('/date-time-change', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['do-you-know-end-date-time']
	 // Check whether the variable matches a condition
	if (planned == "dontknow"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/incident-details')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/planned-date-time')
	}
   })    

// Run this code when a form is submitted to 'maintenance end date time question from edit'
router.post('/date-time-edit', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['do-you-know-end-date-time']
	 // Check whether the variable matches a condition
	if (planned == "dontknow"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/edit-user-alert/incident-details?change=true')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/edit-user-alert/planned-date-time')
	}
   })  
    

// Run this code when a form is submitted to 'confirm incident details'
router.post('/NAM-down-template', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/NAM-down-planned')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/NAM-down')
	}
   })  

// Run this code when a form is submitted to 'incident details edit service down'
router.post('/NAM-down-template-edit', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/edit-user-alert/NAM-down-planned?change=true&namdownplanned=true')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/edit-user-alert/NAM-down?change=true&namdownplanned=false')
	}
   })  
   
// Run this code when a form is submitted to 'incident details edit service not working properly'
router.post('/NAM-template-edit', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/edit-user-alert/NAM-not-working-as-expected-planned?change=true&namplanned=true')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/edit-user-alert/NAM-not-working-as-expected?change=true&namplanned=false')
	}
   })    

// Run this code when a form is submitted to 'confirm incident details'
router.post('/NAM-template', function (req, res) {

	// Make a variable and give it the value from 'enter name for the radio button'
	var planned = req.session.data['is-it-planned']
	 // Check whether the variable matches a condition
	if (planned == "Yes"){
	  // Send user to date and time page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/NAM-not-working-as-expected-planned')
	} else {
	  // Send user to confirm choices page
	  res.redirect('/notifications/user-alerts/turn-on-user-alert/supplier-incidents/NAM-not-working-as-expected')
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