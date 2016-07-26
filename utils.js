function processGrade(grade){
  if (grade < 70){
      
      console.log( "There is no grade like that" );
    }
    
    else if(grade == "INC"){  
    console.log("Your new grade is incomplete");
    }
     else if(grade == "DROP"){  
    console.log("You have drop the subject" );
    }
    
     else if(grade > 100){  
    console.log("Grade is overkill" );
    }
    
     else if (grade < 75){
          if(grade % 2){  //odd
    console.log("Your new grade is :" + parseInt(grade - 3));
    }
    else {
      console.log("Your new grade is :" + parseInt(grade - 2));   
    }
     }
      else{
          
     
          if(grade % 2){  //odd
    console.log("Your new grade is :" + parseInt(grade + 5));
    }
    else {
      console.log("Your new grade is :" + parseInt(grade + 3));   
    }
    
    
      }
      
}  
module.exports = {
    processTheGrade:processGrade
}