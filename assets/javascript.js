// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDGdubFGBJWrTFXCFG88AMlwmVyyG1zfP4",
    authDomain: "classdemo-743ef.firebaseapp.com",
    databaseURL: "https://classdemo-743ef.firebaseio.com",
    projectId: "classdemo-743ef",
    storageBucket: "classdemo-743ef.appspot.com",
    messagingSenderId: "109836927180"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

// click listener on submit
$("#submitButton").on("click", function (event) {
	event.preventDefault();
	let name = $('#trainName').val().trim();
	let destination = $('#trainDestination').val().trim();
	let firstTrainTime = $('#firstTrainTime').val().trim();
	let frequency = $('#trainFrequency').val().trim();
	let trainTime = moment(firstTrainTime, "HH:mm");
	let diffTime = moment().diff(moment(trainTime), "minutes");
	let nextArrival = 
	console.log(diffTime);
	


	// diffTime % frequency
	
	
		
    
	


	let trainDataObject = {
		name: name,
		destination: destination,
		trainFrequency: frequency,
		firstTrainTime: firstTrainTime,
		// nextArrival: nextArrival,
		dateAdded: firebase.database.ServerValue.TIMESTAMP

	}

	
	database.ref().push(
	{
		trainData: trainDataObject
	});
	$(".form-control").empty();
});

database.ref().on("child_added", function(childSnapshot) {
	
    // console.log(childSnapshot.val().trainData.name);
    // console.log(childSnapshot.val().trainData.destination);
    // console.log(childSnapshot.val().trainData.trainFrequency);
   	// console.log(childSnapshot.val().trainData.firstTrainTime);
    // console.log(childSnapshot.val().trainData.nextArrival);
	

		let tableName = (childSnapshot.val().trainData.name);
		let tableDestination = (childSnapshot.val().trainData.destination);
		let tableFirstTrain = (childSnapshot.val().trainData.firstTrainTime);
		let tableFrequency = (childSnapshot.val().trainData.trainFrequency);
		let tableNextArrival = (childSnapshot.val().trainData.nextArrival);

      // full list of items to the well
      $("#dataWrapper").append("<tr>" + "<td>" + tableName + "</td>" + "<td>" + tableDestination + "</td>" + "<td>" + tableFrequency + "</td>" + "<td>" + tableFrequency + "</td>"
       + "<td>" + tableNextArrival + "</td>" + "</tr>");
});
