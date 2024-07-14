name=localStorage.getItem("name");
password=localStorage.getItem("password");
document.getElementById("yourname").innerHTML=name;
document.getElementById("pass").innerHTML=password;

function update(){
    window.location="Canvas.html";
}
