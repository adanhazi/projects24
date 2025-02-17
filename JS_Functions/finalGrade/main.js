// Write your function here:
function finalGrade(num1, num2, num3){
    let aveg = (num1 + num2 + num3)/3;
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)){
    return 'You have entered an invalid grade.';
  } 
  
    if (aveg <= 59){
      return 'F';
    } else if (aveg > 59 && aveg <= 69){
      return 'D';
    } else if (aveg > 69 && aveg <= 79){
      return 'C';
    } else if (aveg > 79 && aveg <= 89){
      return 'B';
    } else if (aveg > 89 && aveg <= 100){
      return 'A';
    }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!