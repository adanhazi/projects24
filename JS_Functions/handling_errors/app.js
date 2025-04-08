import cookBeanScoufle from './library.js';

async function hostDinnerParty() {
  try{
    let dinner = await cookBeanScoufle();
    console.log(`${dinner} is served!`)
  } catch(error){
    console.log(error);
    console.log('Ordering a pizza!')
  }
}
hostDinnerParty();
