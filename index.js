let students = function (marks){
    // Prompt the user to enter the student's marks
   
   
   // Determine the grade based on the marks
   if (marks >= 80) {
     return "A";
   } else if (marks >= 60) {
     return "B";
   } else if (marks >= 50) {
     return "C";
   } else if (marks >= 40) {
     return "D";
   } else {
     return"E";
   }
   
   // Output the grade to the console
   console.log(`The student's grade is ${grade}`);
    
   }
   console.log (students(43))
   
   
   function speedometer(speed){
   const speedLimit = 70;
   if (speed < speedLimit) {
     return "Ok";
   } else {
    let points = Math.floor((speed - speedLimit) / 5) ;
     return points;
     if(points <= 12 ){
       return points;
     }else {
       return "license suspended";
     }
   }
   }
   console.log (speedometer(103))
   
   
   
   
   function netSalaryCalculator(salary, benefits= 0){
      
     const grossIncome = salary + benefits;
     const nssfPercentage= 0.06;
   
   let tax;
     if(grossIncome<=24000){
          tax = (grossIncome*0.1)
      
     } if(grossIncome>24000 && grossIncome<=32333){
        tax =(grossIncome* 0.25)
      
     } if(grossIncome>32333){
      tax =(grossIncome* 0.35)
     
     }
    
   
     let nhif;
     if (grossIncome<=5999){
        nhif =(150)
        
     }else if (grossIncome>=6000 && grossIncome<=7999){
          nhif =(300)
         
     } else if (grossIncome>=8000 && grossIncome<=11999){
           nhif =(400)
          
     }else if (grossIncome>=12000 && grossIncome<=14999){
          nhif =(500)
          
     }else if (grossIncome>=15000 && grossIncome<=19999){
        nhif =(600)
         
     }else if (grossIncome>=20000 && grossIncome<=24999){
         nhif =(750)
         
     }else if (grossIncome>=25000 && grossIncome<=29999){
         nhif =(850)
         
     }else if (grossIncome>=30000 && grossIncome<=34999){
         nhif =(900)
         
     }else if (grossIncome>=35000 && grossIncome<=39999){
         nhif =(950)
         
     }else if (grossIncome>=40000 && grossIncome<=44999){
        nhif =(1000)
         
     }else if (grossIncome>=45000 && grossIncome<=49999){
         nhif =(1100)
      
     }else if (grossIncome>=50000 && grossIncome<=59999){
         nhif =(1200)
      
     }else if (grossIncome>=60000 && grossIncome<=69999){
         nhif =(1300)
      
     }else if (grossIncome>=70000 && grossIncome<=79999){
        nhif =(1400)
     
     }else if (grossIncome>=80000 && grossIncome<=89999){
         nhif =(1500)
      
     }else if (grossIncome>=90000 && grossIncome<=99999){
          nhif =(1600)
      
     }else if (grossIncome>=100000){
           nhif =(1700)
          
     }
   
     let nssf = grossIncome*nssfPercentage;
   
   
       let   netSalary = (grossIncome -nssf -tax -(nhif-(nhif*0.15)))
        
   return netSalary;
   }
   console.log(netSalaryCalculator(1000000, 30000))
   
   
   
   
   