    let date = document.getElementById("day")
    let year = document.getElementById("Year")
    let month = document.getElementById("Month")
    let btn = document.getElementById("buttn")
    let myGender = document.getElementsByName("mygender");

function Calculate(){
    let CC = parseInt(year.value.slice(0, 2));
    let YY = parseInt(year.value.substring(2));
    let MM = parseInt(month.value);
    let DD =parseInt(day.value);
    let d = Math.floor( ( (CC / 4) -2 * CC - 1) + ((5 * YY / 4) ) + ((26 * (MM + 1) / 10)) + DD ) % 7
    return d;
    
}


function getAkanName(){
    let index = Calculate();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    if(myGender == "Male"){
        return maleAkanNames[index];
    }
    else if(myGender == "Female"){
            return femaleAkanNames[index];
    }    
}
function getGender(){
    if(myGender[0].checked == true){
        let mygender = "Male";
    }
    else if(myGender[1].checked == true){
        let mygender = "Female";
    }
      
}
  
console.log(getAkanName())
btn.addEventListener("click", getAkanName());

