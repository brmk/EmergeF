Template.emergencyButton.onCreated(function(){

});

Template.emergencyButton.onRendered(function(){

}); 

Template.emergencyButton.helpers({

});

Template.emergencyButton.events({
	'click .emergency-button' : function(e, tmpl){
		e.preventDefault();

	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position){
	        	var location = {
	        		lat: position.coords.latitude,
		        	lng: position.coords.longitude 
		        }
		        var patientId = FlowRouter.getParam('patientId');
		        Meteor.call('insertCall', patientId, location, function(error, callId){
		        	if(error){
		        		window.open('tel:102');
		        		return;
		        	}
		        	Materialize.toast('Keep calm. Call is submitted');

		        	FlowRouter.go('callStatus', {callId:callId});
		        });
		        
	        });
	    } else {
	        Materialize.toast("Geolocation is not supported by this browser.");
	        window.open('tel:102');
	        return;
	    }

		
	}
});