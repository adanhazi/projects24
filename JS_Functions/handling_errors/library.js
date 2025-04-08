// function returns false 50% of the time
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5){
    return true;
  } else {
    return false;
  }
}

/* this fuction return a promise that resolves half of the time and 
reject half of the time */

const cookBeanScoufle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(() => {
      let success = randomSuccess();
    if(success){
      resolve('Bean scoufle served!');
    } else {
      reject('Dinner ')
    }
    }, 1000)
  });
}
export default cookBeanScoufle;