//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// // CLEAR BUTTENS

                                                    document.getElementById("clearop").onclick=function()
                                                    {
                                                        document.getElementById("output").innerHTML=" "; 
                                                    }
                                                    
                                                    document.getElementById("clearset").onclick=function()
                                                    {
                                                        document.getElementById("statement").innerHTML=" "
                                                    }
                                                    
                                                    
document.getElementById("altnam").onclick = function () {
    let FirstName = "Muhammad"
    let LastName = "Awais"

    document.getElementById("statement").innerHTML = "Two Strings can concatinate like:" + " " + "FirstName" + "+" + "LastName"
    document.getElementById("output").innerHTML = FirstName + LastName
}
document.getElementById("asknam").onclick = function () {
    let FirstName, LastName
    FirstName = prompt("Enter First_Name")
    LastName = prompt("Enter Last_name")
    document.getElementById("statement").innerHTML = "FirstName" + "=" + FirstName + "  " + "LastName" + "=" + LastName
    document.getElementById("output").innerHTML = FirstName + LastName
}
// Comparison ////////////////////////////////////////////////////////////////////////
document.getElementById("cmpn").onclick = function () {
    let num1, num2
    num1 = +prompt("Enter first number")
    num2 = +prompt("Enter second number")
    document.getElementById("statement").innerHTML = "First_Number=" + num1 + "<br>" + "Second_Number=" + num2
    if (num1 == num2) {
        document.getElementById("output").innerHTML = "Numbers are equal"
    }
    else {
        document.getElementById("output").innerHTML = "Numbers are Not equal"
    }
}
// Grade by using if else if ///////////////////////////////////////////////////////////
document.getElementById("grade").onclick = function () {
    document.getElementById("statement").innerHTML = " "
    let marks = +prompt("Enter your Marks")
    if (marks >= 90) {
        document.getElementById("output").innerHTML = "You Got A+"
    }
    else if (marks >= 80) {
        document.getElementById("output").innerHTML = "You Got A"
    }
    else if (marks >= 70) {

        document.getElementById("output").innerHTML = "You Got B"
    }
    else {

        document.getElementById("output").innerHTML = "You are Fail"
    }
}
// Age and waiit to assign healtthh condtion/////////////////////////////////////////////
document.getElementById("agewait").onclick = function () {
    let age = prompt("Enter your age ")
    let weight = prompt("Enter your weight")

    document.getElementById("statement").innerHTML = " "
    if (age <= 10 && weight <= 30) {
        document.getElementById("output").innerHTML = "you are a baby"
    }
    else if (age <= 19 && weight <= 60) {
        document.getElementById("output").innerHTML = "you are a teenager or healthy"
    }
    else if (age <= 40 && weight <= 80) {
        document.getElementById("output").innerHTML = "you are a youngster or fatty "
    }
    else if (age <= 60 && weight <= 80) {
        document.getElementById("output").innerHTML = "you are old man/woman or fatty "
    }
    else {
        document.getElementById("output").innerHTML = "you are a Senior Citizen and fatty"
    }
}
document.getElementById("nested").onclick=function(){
    let userName = prompt("Enter your userName")
    if(userName==="Awais90"){
        let password = prompt("Enter Your password")
        if(password === "9090"){
            document.getElementById("output").innerHTML= "You are successfully logged in" 
        }
        else{
            document.getElementById("output").innerHTML="<span class='text-danger'>Wrong Password</span> <br> Coorrect password is <b>9090<b>"
        }
    }
    else{
        document.getElementById("output").innerHTML="Wrong userName <br> Correct user name is Awais90"
    }
}
// Login ////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("login").onclick = function(){
    let Username = prompt("Enter Your username ")
    let Password = prompt("Enter your password")
    if(Username ==="Awais90"){
        if(Password==="9090"){
            document.getElementById("output").innerHTML="You are successfully logged in"
            
        }
    }
    else{
        document.getElementById("output").innerHTML=" invailed username or password"
    }
}
