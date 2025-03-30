function doTask(taskName, callback){
  setTimeout(() => {
      console.log(`${taskName} complete`);
      callback();
  }, 1000)
}
console.log(`Starting the tasks....`);
doTask('task 1', () => {
  doTask('task 2', () => {
      doTask('Task 3', () => {
          console.log(`All tasks are complete`);
      });
  });
});

function greeting (name, callback){
  console.log(`Hello ${name}`);
  if (callback) callback(name);
}
function isFunc(onlyParameter){
  if (typeof onlyParameter === 'function'){
      onlyParameter();
  } else {
      console.log('no valid callback was provided');
  }
}
function simulateTask(taskName, delay, callback) {
setTimeout(() => {
  console.log(`${taskName} complete`);
  if (callback) {
    callback();
  } else {
    console.log("No further action.");
  }
}, delay);
}