function register(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let user = {
        name,
        email,
        password
    }
    localStorage.setItem("user",JSON.stringify(user))
    let otp = Math.floor(1000+Math.random()*9000)
    localStorage.setItem("otp",otp)
    window.location="otp.html"
}
if(document.getElementById("otp")){
    document.getElementById("otp").innerHTML=localStorage.getItem("otp")
}


function verifyOTP(){
    let otp = localStorage.getItem("otp")
    let entered = document.getElementById("userotp").value
    if(otp==entered){
        alert("otp verified")
        window.location="login.html"
    }
    else{
        alert("wrong otp")
    }
}
function login(){
    let email = document.getElementById("LoginEmail").value
    let password = document.getElementById("LoginPassword").value
    let user = JSON.parse(localStorage.getItem("user"))
    if(user && email == user.email && password == user.password){
        alert("login success")
        window.location="home.html"
    }
    else{
        alert("invalid credentials")
    }
}