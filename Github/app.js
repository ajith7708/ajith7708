const github =new Github();
const ui=new UI();
document.getElementById("userform").addEventListener("submit",function(e){
    e.preventDefault();
    let userText= document.querySelector("#searchUser").value;
    console.log(userText);
    if(userText !==""){
        github.getUser(userText)
        .then(data=>{
            ui.showProfile(data);
        }).catch(error=>console.log(error));   
    }
})