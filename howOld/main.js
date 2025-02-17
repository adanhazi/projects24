// Write your function here:
function howOld(age, year){
    Yob = 2025 - age;
    if (year > 2025){
      return 'You will be ' + (age + (year - 2025)) + ' in the year ' + year;
    } else if (year < Yob){
      return 'The year ' + year + ' was ' + (Yob - year) + ' years before you were born';
    } else if(year > Yob) {
      return 'You were ' + (year - Yob) + ' in the year ' + year; 
    }
  }
  
  console.log(howOld(32, 2970));
  
  
  // Once your function is written, write function calls to test your code!
  