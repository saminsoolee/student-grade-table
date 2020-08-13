// class App {
//   constructor(handleError, handleSuccess, handleCon, handleGet, handleStart){
//     this.handleError = handleError;
//     this.handleSuccess = handleSuccess;
//     this.handleGet = handleGet;
//     this.handleStart = handleStart;
//   }
// }
  var header = document.querySelector('header')
  var averageGrade = new PageHeader(header)


  var table = document.querySelector('table');
  var gradeTable = new GradeTable(table)
  var app = new App(gradeTable, averageGrade)
  app.start()
