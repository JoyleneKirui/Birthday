    let dates = document.getElementById("day")
    let year = document.getElementById("Year")
    let month = document.getElementById("Month")
    
   
    
function Calculate(){
    let CC = (year.value.slice(0, 2));
    let YY = (year.value.substring(2));
    let MM = (month.value);
    let DD = (dates.value);
    let d = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
    return d;
    
}

function validate() {
  var genders = document.getElementsByName("gender"); // gender element declaration
  if(month.value == "" || month.value.length != 2 || month.value > 12  || month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     return false;
  }
  else if(dates.value == "" || month.value.length != 2|| dates.value > 31 || dates.value <= 0) {
     alert( "Please provide a valid date that you were born in!" );
    
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
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
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
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

    getGender();
  }