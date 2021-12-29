//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("Username of the user : ");
room_name = localStorage.getItem("Room Name");

function send(){
      msg_from_the_input = document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg_from_the_input,
            Like:0
      });
      document.getElementById("msg_input").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);

         name = message_data['Name'];
         Message = message_data['Message'];
         Like = message_data['Like'];
         username_with_tag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>";
         message_with_tag = "<h4 class = message_h4>"+Message+"</h4>";
         like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+Like+" onclick = 'updateLike(this.id)'>";
            span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like : "+Like+"</span></button><hr>";
         row = username_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;   
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("like button clicked : " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log("Updated Likes = " + updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            Like:updated_likes
      });
}

function logout(){
      localStorage.removeItem("Username of the user : ");
      localStorage.removeItem("Room Name");
      
      window.location = "index.html";
}

