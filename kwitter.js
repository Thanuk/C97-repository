function addUser(){
    Username = document.getElementById("username_input").value;

    localStorage.setItem("Username of the user : ", Username);

    window.location = "kwitter_room.html";
}