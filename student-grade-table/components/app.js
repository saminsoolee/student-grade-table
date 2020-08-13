class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
  }
  createGrade(name, course, grade){
    console.log(name, course, grade);
  }

  handleCreateGradeError(error){
    console.error(error)
  }

  handleGetGradesError(error){
    console.error(error)
  }

  handleCreateGradeSuccess(){
    this.getGrades()
  }

  handleGetGradesSuccess(grades){
    console.log(grades)
    this.gradeTable.updateGrades(grades)
    var total = 0;
    for(var i = 0; i < grades.length; i++){
      total += grades[i].grade
    }
    var average = total/grades.length;
    this.pageHeader.updateAverage(average)
    console.log(average)
    this.handleGetGradesSuccess.getGrades();
  }

  getGrades(){
    $.ajax({
      headers: {
        "X-Access-Token": "m9u5inMp"
      },
      type: 'GET',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start(){
    this.getGrades();//NEED TO CALL THIS FUNCTION
  }



}
