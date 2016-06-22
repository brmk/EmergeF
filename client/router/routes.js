var loggedIn = FlowRouter.group({
    // triggersEnter: [
    //     function() {
    //         var route;
    //         if (!localStorage.getItem("patientId")) {
    //             route = FlowRouter.current();
    //             return FlowRouter.go('signIn');
    //         }
    //     }
    // ]
});

loggedIn.route('/:patientId', {
    name: 'home',
    action: function(){
        BlazeLayout.render("mainLayout", {
            content: "emergencyButton"
        });
    }
});

loggedIn.route('/status/:callId', {
    name: 'callStatus',
    action: function(){
        BlazeLayout.render("mainLayout", {
            content: "callStatus"
        });
    }
});

loggedIn.route('/logout', {
    name: 'logout',
    action: function(){
        Meteor.logout(function(){
            FlowRouter.go('signIn')
            localStorage.setItem("patientId", null);
        });
    }
});

var unsecured = FlowRouter.group();

unsecured.route('/', {
    name : 'signIn',
    action : function() {
        BlazeLayout.render("mainLayout", {
            content: "signIn"
        });
    },
    triggersEnter: [
        function() {
            var patientId = localStorage.getItem("patientId");
            if (patientId) {
                FlowRouter.go('home', {patientId: patientId});
            }
        }
    ]
})
