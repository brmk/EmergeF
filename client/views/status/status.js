Template.callStatus.onCreated(function(){

});

Template.callStatus.onRendered(function(){

}); 

Template.callStatus.helpers({
	status : function(){
		var callId = FlowRouter.getParam('callId');
		var call = Calls.findOne(callId);
		if(status === 'finished'){
			FlowRouter.go('home', {patientId:call.patientId});
		}
		return call.status;
	}
});

Template.callStatus.events({

});