




function submit(){
    name=document.getElementById("name").value;
    password=document.getElementById("password").value;
    if(name==""){alert("Please fill all the details .");}
    else{

    localStorage.setItem("name",name);
    localStorage.setItem("password",password);
    alert("Your Account is been created successsfully..!"+name);
    console.log("ID Saved");
    window.location="Canvas.html";
    }
    
}
