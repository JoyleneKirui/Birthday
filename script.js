    let dates = document.getElementById("day")
    let year = document.getElementById("Year")
    let month = document.getElementById("Month")
    
   
    
function Calculate(){
    let CC = parseInt(year.value.substring(0, 2));
    let YY = parseInt(year.value.substring(2));
    let MM = parseInt(month.value);
    let DD = parseInt(dates.value);
    let d = Math.floor(( ( (CC / 4) - (2 * CC) - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) % 7);
    
    return d;
    
    
}

function validate() {
  let MM = (month.value);
  let DD = (dates.value);
  if(DD == "" || isNaN(DD) || 
  DD.length > 2|| DD > 31 || DD <= 0) {
  alert( "Please provide a valid date!" );
  DD.focus() ;
  return false;
  }
  else  if( MM == "" || isNaN(MM) || MM.length > 2 || MM > 12  || MM <= 0){
    alert( "Please provide a valid month!" );
    MM.focus() ;
    return false;
  }
  else{
    return true ;
    
  }
}
function getGender(){
    let index = Calculate();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var mygender = document.getElementsByName("gender");
    if(mygender[0].checked == true){
      var gender = "male";
    }
    else if(mygender[1].checked == true){
      var gender = "female";
    }
    
    else{
      return false;
    }

  
  switch(gender){
    case "male":
        alert("You were born on " + days[index] + " and Your akan name is " +maleAkanNames[index]+"!"); //conditional case for gender>>>downwards
    
    break; 
    case "female":
      
        alert("You were born on "+ days[index] + " and Your akan name is " + femaleAkanNames[index]+"!");
      
    break;
    
  }

}
function findName(){
    validate();
    getGender();
  }