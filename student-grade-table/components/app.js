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
  createGrade(userName, course, grade){
    console.log(userName, course, grade);
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
    // this.getGrades(); why did you write this here dumbass
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
    // this.createGrade = this.gradeForm.onSubmit();
    this.gradeForm.onSubmit(this.createGrade)
    this.getGrades();//NEED TO CALL THIS FUNCTION
  }



}
