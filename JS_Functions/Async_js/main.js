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
//Exercise 1
function simulateAsyncTask(delay) {
  // Your code here
  setTimeout(() => {
      return new Promise((resolve, reject) => {
        resolve("Task completed after {delay}ms")  
      })
  }, delay)
}
//Exercise 2
function simulateFailure(delay) {
  // Your code here
   setTimeout(() => {
      return new Promise((resolve, reject) => {
        reject("Task failed after {delay}ms")  
      })
  }, delay)
}
//Exercise 3
function chainTasks() {
  // Your code here
  const task1 = new Promise((resolve) =>{
      resolve("Task 1 complete")
  });
  const task2 = new Promise((resolve) =>{
      resolve("Task 2 complete")
  });
  const task3 = new Promise((resolve) =>{
      resolve("Task 3 complete")
  });
  
  task1
  .then((result1) =>{
      console.log(result1);
      return task2;
  })
  .then((result2) =>{
      console.log(result2);
      return task3;
  })
  .then((result3) =>{
      console.log(result3)
  })
}
//exercise 4