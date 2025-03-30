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