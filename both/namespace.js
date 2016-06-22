BRMK = {
	helpers : {}
}

BRMK.helpers.notify = function(message) {
	Materialize.toast(message, 5000);
	console.log('Toast: ' + message);	
}