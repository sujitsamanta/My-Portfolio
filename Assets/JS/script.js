let first_namer=document.getElementById("first_namer");
let last_namer=document.getElementById("last_namer");
let emailr=document.getElementById("emailr");
let passwordr=document.getElementById("passwordr");
let cpasswordr=document.getElementById("cpasswordr");
let submit=document.getElementById("submitr");
let patern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// ((first_namer=="" && first_namer==" ") && (last_namer=="" && last_namer==" ") &(emailr=="" && emailr==" ") && (passwordr=="" && passwordr==" ") && (cpasswordr=="" && cpasswordr==" "))
function register(){
    // alert(first_namer.value);

    if ((first_namer.value=="" || first_namer.value==" ") && (last_namer.value=="" || last_namer.value==" ") && (emailr.value=="" || emailr.value==" ") && (passwordr.value=="" || passwordr.value==" ") && (cpasswordr.value=="" || cpasswordr.value==" ")){
        alert("The from is empty ples enter.....");
        return false;
    }
    else if(first_namer.value=="" || first_namer.value==" "){
        alert("Enter the First name...!");
    }
    else if(last_namer.value=="" || last_namer.value==" "){
        alert("Enter the Last name...!");
    }
    else if(emailr.value=="" || emailr.value==" "){
        alert("Enter the Email ID...!");
    }
    else if (emailr.match(patern)){
        alert("Enter the valid Email ID...!");
        // alert("Dun");
    }
    else if(passwordr.value=="" || passwordr.value==" "){
        alert("Enter the password...!");
    }
    else if(cpasswordr.value=="" || cpasswordr.value==" "){
        alert("Enter the Conferm Password...!");
    }
    else if(passwordr.value!=cpasswordr.value){
        alert("Enter the same Password...!");
    }
    else{
        alert("Dun..........!!!!!!!!!!!");
    }

    // if(emailr.value=="" || emailr.value==" "){
    //     alert("Enter the Email ID...!");
    // }
    // else if (emailr.value.test(patern)){
    //     // alert("Enter the Email ID...!");
    //     alert("Dun");
    // }
    // else{
    //     alert("Enter the valid Email ID...!");
    // }
}