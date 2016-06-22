// var remote = DDP.connect('http://localhost:3030/');
if(Meteor.isClient){
	RemoteDDP("http://localhost:3030");
	Calls = new Meteor.Collection('Calls');
	Patients = new Meteor.Collection('Patients');
}


// Items = new Meteor.Collection('items', remote);
// if (Meteor.isClient) {
	// Meteor.connection = DDP.connect('http://localhost:3030/');
	// Meteor.users = new Meteor.Collection('users');
// 	Calls = new Meteor.Collection('Calls', remote);
// 	Patients = new Meteor.Collection('Patients', remote);
// }

