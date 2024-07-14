name=localStorage.getItem("name");
password=localStorage.getItem("password");
document.getElementById("name").innerHTML=name+" !";


var firebaseConfig = {
    apiKey: "AIzaSyBW7BEh0l_XMYmjgbm6ZS93XV36PDY7oXI",
    authDomain: "inbox-d6239.firebaseapp.com",
    databaseURL: "https://inbox-d6239-default-rtdb.firebaseio.com",
    projectId: "inbox-d6239",
    storageBucket: "inbox-d6239.appspot.com",
    messagingSenderId: "593688407634",
    appId: "1:593688407634:web:69cdf234ec069b28a9b98b",
    measurementId: "G-H2KZSR1VTX"
  };

firebase.initializeApp(firebaseConfig);

// initialize database
const db = firebase.database();

// get user's data



// submit form
// listen for submit event on the form and call the postChat function
document.getElementById("message-for").addEventListener("submit", sendMessage);

// send message to db
function sendmessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("msg");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
      .getElementById("messages")
      .scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
      });

  // create db collection and send in the data
  db.ref("inbox/" + timestamp).set({
      name,
      password,
      message,
  });
}

// display the messages
// reference the collection created earlier
const fetchChat = db.ref("inbox/");

// check for new messages using the onChildAdded event listener
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
name === messages.name ? "sent" : "receive"
}><span>${messages.name}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});


// Function to send a message
db = firebase.database();


  
   
  