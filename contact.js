// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBuLF61RcEZS_6M6q6PmqNUkXoPYSMnwCw",
  authDomain: "demodayproject-2ad25.firebaseapp.com",
  databaseURL: "https://demodayproject-2ad25.firebaseio.com",
  projectId: "demodayproject-2ad25",
  storageBucket: "",
  messagingSenderId: "254480948893",
  appId: "1:254480948893:web:66c281d3269d743b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
   // Reference messages collection
   var messagesRef = firebase.database().ref('Messages');
   
   // Listen for form submit
   document.getElementById('contactForm').addEventListener('submit', submitForm);
   
   // Submit form
   function submitForm(e){
     e.preventDefault();
   
     // Get values
     var name = getInputVal('name');
     var email = getInputVal('email');
     var state = getInputVal('state');
     var message = getInputVal('message');
   
     // Save message
     saveMessage(name, email, state, message);
   
     // Show alert
     document.querySelector('.alert').style.display = 'block';
   
     // Hide alert after 3 seconds
     setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
     },3000);
   
     // Clear form
     document.getElementById('contactForm').reset();
   }
   
   // Function to get get form values
   function getInputVal(id){
     return document.getElementById(id).value;
   }
   
   // Save message to firebase
   function saveMessage(name, email, state, message){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
       Name: name,
       Email:email,
       State: state,
       Message:message
     });
   }

function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
 }
   