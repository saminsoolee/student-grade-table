// class App {
//   constructor(handleError, handleSuccess, handleCon, handleGet, handleStart){
//     this.handleError = handleError;
//     this.handleSuccess = handleSuccess;
//     this.handleGet = handleGet;
//     this.handleStart = handleStart;
//   }
// }
  var header = document.querySelector('header')
  console.log(header)
  var averageGrade = new PageHeader(header)


  var form = document.querySelector('form');
  var gradeForm = new GradeForm(form)

  var noGradesPTag = document.querySelector('p');
  var table = document.querySelector('table');

  var gradeTable = new GradeTable(table, noGradesPTag);
  var app = new App(gradeTable, averageGrade, gradeForm);
  app.start()
