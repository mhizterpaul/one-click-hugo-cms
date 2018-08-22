// JS Goes here - ES6 supported

// Initialize Firebase
let config = {
  apiKey: "AIzaSyD9h3vQlFMD27lwFZaryDeYyOkotOmhUIk",
  authDomain: "contactform-a488c.firebaseapp.com",
  databaseURL: "https://contactform-a488c.firebaseio.com",
  projectId: "contactform-a488c",
  storageBucket: "contactform-a488c.appspot.com",
  messagingSenderId: "473349870319"
};
firebase.initializeApp(config);

//Refrence messages collection
let messagesRef = firebase.database().ref("messages");

//Listen for form submit
document.getElementByid("contactForm").addEventListener(
	"submit", submitForm
);

//Submit form
function submitForm(e){
	e.preventDefault();

	//Get input value
	let name = getInputVal(name);
	let email = getInputVal(email);
	let message = getInputVal(message);

	saveMessage(name, email, message);

	//Show alert
	document.querySelector(".alert").style.display = "block";

	//Hide alert after 3 sec
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	}, 3000);

	//Clear form inputs
	document.getElementByid("contactForm").reset();

}

//Function to get input value
function getInputVal(id) {
	return document.getElementByid(id).value;
}

//Save the message firebase
function saveMessage(name, email, message){
	let newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		message: message
	});

}


//Connetion to Netlify CMS

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
