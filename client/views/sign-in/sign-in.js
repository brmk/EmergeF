Template.signIn.events({
    'submit #loginForm': function(e, tmpl) {
        e.preventDefault();

        var patientId = tmpl.$('#patientId').val();

        if (Patients.findOne(patientId)) {
        	var activeCall = Calls.findOne({
                status: 'unaccepted',
                patientId: patientId
            });
        	localStorage.setItem("patientId", patientId);
            if (activeCall) {
                FlowRouter.go('callStatus', {callId: activeCall._id});
            } else {
            	FlowRouter.go('home', {patientId:patientId});
            }

        } else {
        	Materialize.toast('Patient not found');
        }
    }
});