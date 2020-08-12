// class App {
//   constructor(handleError, handleSuccess, handleCon, handleGet, handleStart){
//     this.handleError = handleError;
//     this.handleSuccess = handleSuccess;
//     this.handleGet = handleGet;
//     this.handleStart = handleStart;
//   }
// }
  var table = document.querySelector('table');
  var gradeTable = new GradeTable(table)
  var app = new App(gradeTable)
  app.start()
