
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA1sWLbkfNhhOsRRUeDUzQJr8YVk1_q31c",
      authDomain: "kwitter-db-720ea.firebaseapp.com",
      databaseURL: "https://kwitter-db-720ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-db-720ea",
      storageBucket: "kwitter-db-720ea.appspot.com",
      messagingSenderId: "612406785838",
      appId: "1:612406785838:web:f89aea5dab289c28376cbf"
};
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    username = localStorage.getItem("Username of the user : ");
    actual_username = username.toUpperCase();
    document.getElementById("User_name").innerHTML = "Welcome " + actual_username + "!";
    console.log("Username = " + actual_username);
    
function addRoom(){
      room_name = document.getElementById("Add_Room_input").value;
      localStorage.setItem("Room Name", room_name);
      firebase.database().ref("/").child(room_name).update({
             purpose: "adding room name"
      });
      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Names Enter in Kwitter are" + Room_names);
       row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
   });
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("Username of the user : ");
      localStorage.removeItem("Room Name");
      
      window.location = "index.html";
}
