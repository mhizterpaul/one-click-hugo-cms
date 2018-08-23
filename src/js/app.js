// JS Goes here - ES6 supported

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLSy9UIYLOk0zduUjAkbTA0OVjcEatwZ8",
  authDomain: "blogcontact-f2519.firebaseapp.com",
  databaseURL: "https://blogcontact-f2519.firebaseio.com",
  projectId: "blogcontact-f2519",
  storageBucket: "blogcontact-f2519.appspot.com",
  messagingSenderId: "691135997315"
};
firebase.initializeApp(config);

//Refrence messages collection
var messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementById("contactForm").addEventListener("submit", function(e){
	e.preventDefault();
	//Get input value
	var name = getInputVal("name");
	var email = getInputVal("email");
	var message = getInputVal("message");

	saveMessage(name, email, message);

	//Show alert
	document.querySelector(".alert").style.display = "block";

	//Hide alert after 3 sec
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	}, 3000);

	//Clear form inputs
	document.getElementById("contactForm").reset();
});



//Function to get input value
function getInputVal(id) {
	return document.getElementById(id).value;
}
//Save the message firebase
function saveMessage(name, email, message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		message: message
	});

}


//For newsletter
var newsletterRef = firebase.database().ref("newsletter");
document.getElementById("newsletter").addEventListener("submit", function(e){
	e.preventDefault();
	//Get input value
	var newsletterEmail = document.getElementById("newsletterEmail").value;
	saveEmail(newsletterEmail);

	//Show alert
	document.querySelector(".newsletterAlert").style.display = "block";

	//Hide alert after 3 sec
	setTimeout(function(){
		document.querySelector(".newsletterAlert").style.display = "none";
	}, 3000);

	//Clear form inputs
	document.getElementById("newsletter").reset();
});

function saveEmail(newsletterEmail){
	var newnewletterRef = newsletterRef.push();
	newnewletterRef.set({
	 newsletterEmail: newsletterEmail
	});
}


//Connetion to Netlify CMS- The admin path

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

/*
var theForm = document.querySelector(".contactForm");
theForm.addEventListener("submit", function(event){
	event.preventDefault();

	//Get input value
	var name = getInputVal("name");
	var email = getInputVal("email");
	var message = getInputVal("message");

	saveMessage(name, email, message);

	//Show alert
	document.querySelector(".alert").style.display = "block";

	//Hide alert after 3 sec
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	}, 3000);

	//Clear form inputs
	document.getElementById("contactForm").reset();

});
*/